/**
 * Created by Pavlo_Oliinyk.
 */

var uiHandler = {
  getValsBelt: function () {
    return $("#single").val();
  },
  getValsGender: function () {
    return ( $("#toggleIsMale").prop('checked') ) ? 'м' : 'ж';
  },
  getValsAge: function () {
    var res = $("#player-age").val().split("-");
    return { 'ageFrom': res[0] , 'ageTo': res[1] }  ;
  },
  getValsWeight: function () {
    var weightFrom = $("#weight-from").val(), weightTo = $("#weight-to").val();

    return { 'from': weightFrom , 'to': weightTo } ; //{'from': 23, 'to': 31}
  },
  makeCalculateButton: function (json) {
    var $filterBox = $(".js_calculate-box"),
      $button = $(".js_calculate", $filterBox),
      me = this;

    function sortByFilter(json, categoryRange, gender, belt , age) { //args : jsonArray,{'from':23,'to':31},'м'

      return json.filter(function (subarray, i, array) {
          var _weight = subarray[2],
            _age = me.getAge( subarray[3].replace(/\./gi,'/') ),
            _gender = subarray[4],
            _belt = subarray[8];

          return (_weight >= categoryRange.from && _weight <= categoryRange.to
            && _gender === gender
            && _belt === belt
            && _age > age.ageFrom && _age <= age.ageTo );
        }
      );
    }

    $filterBox.show();

    $button.click(function () {
      var $wrapper = $('#calc-result'),
        filter = [me.getValsWeight(), me.getValsGender(), me.getValsBelt().toLowerCase() , me.getValsAge()],
        boys = sortByFilter(json, filter[0], filter[1], filter[2], filter[3]);

      $wrapper.empty();
      me.createList($wrapper, boys);
      me.scrollTo($wrapper);      
    });
  },
  getAge: function(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  },
  
  /*el - jQuery element*/
  scrollTo: function(el){
    $('html, body').animate({
        scrollTop: el.offset().top
      }, 1000);
  },

  createList: function($wrapper, dataArr){

    var $ulSCSS = $('<ul class="list-group mb-4">').appendTo($wrapper),
      me = this;

    dataArr
      .map(function (item) {
        var date = item[3], team = item[5], weight = item[2],
          years = me.getAge( item[3].replace(/\./gi,'/') );
        $ulSCSS.append(
          "<li class='list-group-item custom_select__item list-unstyled'>"+
          "<p>id:"+ item[9]+" <b>"+item[0]+" , </b><b> "+item[5]+"</b> вес: "+ weight+" <p>" +
          "<span style='background-color: "+item[8]+"'> д.рождения"+item[3] + " ("+years + " лет)  пояс: "+item[8]+"</span>"+
          "</li>"
        )
      });

    var buildStageOneHandler = function (e) {
      //console.log(dataArr);
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

      var pairs = pairsHandler.init(dataArr);

      me.showCheckedRounds(pairs, $wrapper);
      me.scrollTo($wrapper);
    };

    this.addButton($wrapper,buildStageOneHandler, 'To pairs');
  },

  /**
   *
   * @param $wrapper - DOM element
   * @param handler - function on click
   */
  addButton: function($wrapper, handler , btnText){
    var $button = $('<button class="btn btn-outline-success">').appendTo($wrapper).text(btnText);
    $button.on('click',handler);
  },

  /**
   *
   * @param pairs - arr of 2d arrays [ [[player-1],[player-2]], [[player-1],[player-2]] ... ]
   * @param $wrapper - DOM element
   */
  showCheckedRounds: function (pairs, $wrapper) {
    var $ul = $('<ul class="list-group mt-4" id="pairs-results">');

    $('#pairs-results').remove();
    pairs.forEach(function (item) {
      var fPl = item[0], secPl = item[1],
        f_name = fPl[0],
        f_date = fPl[3],
        f_team = fPl[5],
        f_weight = fPl[2],
        outPutLi,
        errClass = '';

      if (item[1] && fPl[5] === secPl[5])
        errClass = 'list-group-item-danger';
      else errClass = '';

      outPutLi = (item[1])
        ? "<li class='list-group-item custom_select__item list-unstyled " + errClass + "'>" +
      "<p>id:" + fPl[9] + " <b>" + f_name + " , </b><b> " + f_team + "</b> вес: " + f_weight + "<p>" +
      "<b class='mr-4 ml-4'>-==VS==-</b>" +
      "<p>id:" + item[1][9] + " <b>" + item[1][0] + " , </b><b> " + item[1][5] + "</b> вес: " + item[1][2] + "<p>" +
      "</li>"
        : "<li class='list-group-item custom_select__item list-unstyled'>" +
      "<p>id:" + fPl[9] + " <b>" + f_name + " , </b><b> " + f_team + "</b> вес: " + f_weight + "<p>" +
      "</li>";

      $ul.append(outPutLi)
    });
    $ul.appendTo($wrapper);
  },

  callTestDataDropSheet: function(cbOnSheet){
    var $button = $('#load-demo-file');
    $button.on('click',function () {
      console.log('click');
      var data = [
        ["first_name", "last_name", "вес", "день рождения", "gender", "team", "isFight", "isTul", "belt", "id"],
        ["kostya", "sName1", "27", "01.15.2000", "м", "atom", "+", "-", "yellow", "1"],
        ["nazar", "sName2", "22", "01.16.2001", "м", "atom", "+", "+", "red", "2"],
        ["kolya", "sName3", "41", "01.26.2002", "м", "Scorpion", "+", "+", "black", "3"],
        ["feona", "sName4", "32", "01.22.2003", "ж", "Scorpion", "+", "-", "green", "4"],
        ["griha", "sName5", "28", "01.23.2004", "м", "koodo", "+", "+", "yellow", "5"],
        ["kostya", "sName6", "21", "01.22.2005", "м", "koodo", "+", "-", "yellow", "6"],
        ["nazar", "sName7", "24", "02.02.2006", "м", "koodo", "+", "+", "yellow", "7"],
        ["kolya", "sName8", "33", "01.22.2007", "м", "koodo", "+", "+", "yellow", "8"],
        ["fedya", "sName9", "37", "01.22.2008", "м", "koodo", "-", "-", "yellow", "9"],
        ["griha", "sName10", "32", "01.22.2000", "м", "scorpion", "+", "-", "yellow", "10"],
        ["daniil", "sName11", "28", "01.22.2001", "м", "scorpion", "+", "-", "black", "11"],
        ["sergey", "sName12", "21", "01.22.2002", "м", "woo", "+", "+", "white", "12"],
        ["tanya", "sName13", "24", "01.22.2003", "ж", "scorpion", "+", "+", "yellow", "13"],
        ["olya", "sName14", "33", "01.22.2004", "ж", "woo", "+", "+", "yellow", "14"],
        ["nastya", "sName15", "37", "01.22.2005", "ж", "Scorpion", "+", "+", "yellow", "15"],
        ["kerim", "sName16", "27", "01.22.1999", "м", "atom", "+", "-", "yellow", "16"],
        ["nazar", "sName17", "22", "01.22.2007", "м", "atom", "+", "+", "yellow", "17"],
        ["kolya", "sName18", "41", "01.22.2008", "м", "Scorpion", "-", "-", "yellow", "18"],
        ["fedya", "sName19", "32", "01.22.2002", "м", "Scorpion", "+", "+", "yellow", "19"],
        ["griha", "sName20", "28", "01.22.2003", "м", "koodo", "+", "+", "yellow", "20"],
        ["kostya", "sName21", "21", "01.22.2004", "м", "koodo", "+", "-", "yellow", "21"],
        ["nazar", "sName22", "24", "01.22.2005", "м", "koodo", "+", "+", "yellow", "22"],
        ["kolya", "sName23", "25", "01.22.2006", "м", "koodo", "+", "+", "yellow", "23"],
        ["fedya", "sName24", "26", "01.22.2007", "м", "koodo", "+", "+", "yellow", "24"],
        ["griha", "sName25", "27", "01.22.2008", "м", "scorpion", "-", "+", "yellow", "25"]
      ];
      cbOnSheet(data,[]);
    });
  }

};
