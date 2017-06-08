/** drop target **/
var _target = document.getElementById('drop');

/** Spinner **/
var spinner;

var _workstart = function() { spinner = new Spinner().spin(_target); }
var _workend = function() { spinner.stop(); }

/** Alerts **/
var _badfile = function() {
  alertify.alert('This file does not appear to be a valid Excel file.  If we made a mistake, please send this file to <a href="mailto:dev@sheetjs.com?subject=I+broke+your+stuff">dev@sheetjs.com</a> so we can take a look.', function(){});
};

var _pending = function() {
  alertify.alert('Please wait until the current file is processed.', function(){});
};

var _large = function(len, cb) {
  alertify.confirm("This file is " + len + " bytes and may take a few moments.  Your browser may lock up during this process.  Shall we play?", cb);
};

var _failed = function(e) {
  console.log(e, e.stack);
  alertify.alert('We unfortunately dropped the ball here.  We noticed some issues with the grid recently, so please test the file using the <a href="/js-xlsx/">raw parser</a>.  If there are issues with the file processor, please send this file to <a href="mailto:dev@sheetjs.com?subject=I+broke+your+stuff">dev@sheetjs.com</a> so we can make things right.', function(){});
};

/** Handsontable magic **/
var boldRenderer = function (instance, td, row, col, prop, value, cellProperties) {
  Handsontable.TextCell.renderer.apply(this, arguments);
  $(td).css({'font-weight': 'bold'});
};

var $container, $parent, $window, availableWidth, availableHeight;
var calculateSize = function () {
  var offset = $container.offset();
  availableWidth = Math.max($window.width() - 250,600);
  availableHeight = Math.max($window.height() - 250, 400);
};

$(document).ready(function() {
  $container = $("#hot"); $parent = $container.parent();
  $window = $(window);
  $window.on('resize', calculateSize);
});

/* make the buttons for the sheets */
var make_buttons = function(sheetnames, cb) {
  var $buttons = $('#buttons');
  $buttons.html("");
  sheetnames.forEach(function(s,idx) {
    var button= $('<button/>').attr({ type:'button', name:'btn' +idx, text:s ,class: 'btn btn-sm btn-info'});
    button.append('<span>' + s + '</span>');
    button.click(function() { cb(idx); });
    $buttons.append(button);
    $buttons.append('<br/>');
  });
};
/**
 *
 * @param $wrapper - DOM element
 * @param handler - function on click
 */
var addButton = function($wrapper, handler , btnText){
  var $button = $('<button class="btn btn-outline-success">').appendTo($wrapper).text(btnText);
  $button.on('click',handler);
};
var createList = function($wrapper, dataArr){
  // console.log(dataArr);
  var $ulSCSS = $('<ul class="list-group mb-4">').appendTo($wrapper);
  // if($('.list-group.prepared').length > 1){ $('.list-group').empty(); }

  dataArr
    .map(function (item) {
      var date = item[3], team = item[5], weight = item[2];
      $ulSCSS.append(
        "<li class='list-group-item custom_select__item list-unstyled'>"+
          "<p>id:"+ item[9]+" <b>"+item[0]+" , </b><b> "+item[5]+"</b> вес: "+ weight+"<p>" +
          "<span style='background-color: "+item[8]+"'> д.рождения"+item[3]+"  пояс: "+item[8]+"</span>"+
        "</li>"
      )
    });


  var buildStageOneHandler = function (e) {
    console.log(dataArr);
    function toObj(arr){
      var arrOfobj = [];
      arr.forEach(function(item){
        arrOfobj.push( {
          'name': item[0],
          'last_name': item[1],
          'weight': item[2],
          'date': item[3],
          'genre': item[4],
          'team': item[5],
          'isFight': item[6],
          'isTul' : item[7]}
        );
      });

      return arrOfobj;
    }

    var pairs = filterHelper.init(dataArr);
    
    filterHelper.showCheckedRounds(pairs, $wrapper);
    
  };
  addButton($wrapper,buildStageOneHandler, 'To pairs');
};


var displayValsBelt = function(){
    var singleValues = $( "#single" ).val();
    $( ".filter-belt" ).html( "<b>belt:</b> " + singleValues  );
  return singleValues;
};
var displayValsGenre = function(){
  var isMale = $("#toggleIsMale").prop('checked'),
    val = (isMale)?'м':'ж';
  console.log('displayValsGenre');
  $( ".filter-genre" ).html( "<b>genre:</b> " + val );
  return val;
};
$( "#single" ).change( displayValsBelt );
$( "#toggleIsMale" ).change( displayValsGenre );
displayValsBelt();
displayValsGenre();

var makeCalculateButton = function(json ){

  var $filterBox = $(".js_calculate-box");
  var $button = $(".js_calculate", $filterBox);

  $filterBox.show();

  function sortByWeight(json,categoryRange,genre , belt) { //args : jsonArray,{'from':23,'to':31},'м'
    return json.filter(function(subarray, i, array) {
      var _weight = subarray[2],
        _genre = subarray[4],
        _belt = subarray[8];
        return (_weight >= categoryRange.from && _weight <= categoryRange.to && _genre === genre && _belt === belt);
      }
    );
  }

  $button.click(function() {
    var $wrapper = $('#calc-result'),
      isMale = $("#toggleIsMale").prop('checked'),
      filter = [{'from':23,'to':31}, displayValsGenre() , displayValsBelt().toLowerCase()],
      boys = sortByWeight(json,filter[0],filter[1], filter[2]);
    console.log('filter' , filter  );
    console.log('validateCheckBox' , isMale);
    $wrapper.empty();
    // $('<h3 class="">').appendTo($filterBox).text('filter by: '+JSON.stringify(filter));
    createList($wrapper, boys);
  });
  // $button.insertAfter("#hot");
};

var _onsheet = function(json, sheetnames, select_sheet_cb) {
  // $('#footnote').hide();

  make_buttons(sheetnames, select_sheet_cb);
  calculateSize();

  /* add header row for table */
  if(!json) json = [];
	json.forEach(function(r) { if(json[0].length < r.length) json[0].length = r.length; });
  calculateSize();

  makeCalculateButton(json);
  /* showtime! */
  $("#hot").handsontable({
    data: json,
    startRows: 5,
    startCols: 3,
    stretchH: 'all',
    rowHeaders: true,
    colHeaders: true,
    width: function () { return availableWidth; },
    height: function () { return availableHeight; }
  });
};

/** Drop it like it's hot **/
DropSheet({
  drop: _target,
  on: {
    workstart: _workstart,
    workend: _workend,
    sheet: _onsheet,
    foo: 'bar'
  },
  errors: {
    badfile: _badfile,
    pending: _pending,
    failed: _failed,
    large: _large,
    foo: 'bar'
  }
});

var callDropSheet = function(){
  var $button = $('#load-demo-file');
  $button.on('click',function () {
  console.log('click');
    var data = [
      ["first_name", "last_name", "вес", "день рождения", "genre", "team", "isFight", "isTul", "belt", "id"],
      ["kostya", "sName1", "27", "21.02.2000", "м", "atom", "+", "-", "yellow", "1"],
      ["nazar", "sName2", "22", "21.02.2001", "м", "atom", "+", "+", "red", "2"],
      ["kolya", "sName3", "41", "21.02.2002", "м", "Scorpion", "+", "+", "black", "3"],
      ["feona", "sName4", "32", "21.02.2003", "ж", "Scorpion", "+", "-", "green", "4"],
      ["griha", "sName5", "28", "21.02.2004", "м", "koodo", "+", "+", "yellow", "5"],
      ["kostya", "sName6", "21", "21.02.2005", "м", "koodo", "+", "-", "yellow", "6"],
      ["nazar", "sName7", "24", "02.02.2006", "м", "koodo", "+", "+", "yellow", "7"],
      ["kolya", "sName8", "33", "21.02.2007", "м", "koodo", "+", "+", "yellow", "8"],
      ["fedya", "sName9", "37", "21.02.2008", "м", "koodo", "-", "-", "yellow", "9"],
      ["griha", "sName10", "32", "21.02.2000", "м", "scorpion", "+", "-", "yellow", "10"],
      ["daniil", "sName11", "28", "21.02.2001", "м", "scorpion", "+", "-", "black", "11"],
      ["sergey", "sName12", "21", "21.02.2002", "м", "woo", "+", "+", "white", "12"],
      ["tanya", "sName13", "24", "21.02.2003", "ж", "scorpion", "+", "+", "yellow", "13"],
      ["olya", "sName14", "33", "21.02.2004", "ж", "woo", "+", "+", "yellow", "14"],
      ["nastya", "sName15", "37", "21.02.2005", "ж", "Scorpion", "+", "+", "yellow", "15"],
      ["kerim", "sName16", "27", "21.02.1999", "м", "atom", "+", "-", "yellow", "16"],
      ["nazar", "sName17", "22", "21.02.2007", "м", "atom", "+", "+", "yellow", "17"],
      ["kolya", "sName18", "41", "21.02.2008", "м", "Scorpion", "-", "-", "yellow", "18"],
      ["fedya", "sName19", "32", "21.02.2002", "м", "Scorpion", "+", "+", "yellow", "19"],
      ["griha", "sName20", "28", "21.02.2003", "м", "koodo", "+", "+", "yellow", "20"],
      ["kostya", "sName21", "21", "21.02.2004", "м", "koodo", "+", "-", "yellow", "21"],
      ["nazar", "sName22", "24", "21.02.2005", "м", "koodo", "+", "+", "yellow", "22"],
      ["kolya", "sName23", "33", "21.02.2006", "м", "koodo", "+", "+", "yellow", "23"],
      ["fedya", "sName24", "37", "21.02.2007", "м", "koodo", "+", "+", "yellow", "24"],
      ["griha", "sName25", "27", "21.02.2008", "м", "scorpion", "-", "+", "yellow", "25"]
    ];
    _onsheet(data,[])
  });
};
callDropSheet();