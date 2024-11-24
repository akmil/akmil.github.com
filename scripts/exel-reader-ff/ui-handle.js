/**
 * Created by Pavlo_Oliinyk.
 */
var uiHandler = uiHandler || {}
uiHandler = Object.assign(uiHandler, {
  getValsBelt: function () {
    return $("#single").val();
  },
  getValsGender: function () {
    return ($("#toggleIsMale").prop('checked')) ? 'м' : 'ж';
  },
  getValsAge: function () {
    var res = $("#player-age").val().split("-");
    return { 'ageFrom': res[0], 'ageTo': res[1] };
  },
  getValsWeight: function () {
    var weightFrom = $("#weight-from").val(), weightTo = $("#weight-to").val();

    return { 'from': weightFrom, 'to': weightTo }; //{'from': 23, 'to': 31}
  },
  makeCalculateButton: function (json) {
    console.log('[" Рахунок ", " Номер угоди ", " Тікер ", " ISIN ", " Тип інструменту/угоди ", " Місце ", " Операція ", " Кількість ", " Ціна ", " Валюта ", " Сума ", " Прибуток ", " Курс валюти ", " Прибуток у EUR ", " Комісія ", " Дата розрахунків "]');
    console.log('makeCalculateButton');


    var $filterBox = $(".js_calculate-box"),
      $button = $(".js_calculate", $filterBox),
      me = this;


    function calculate(json) {
      return json.filter(function (subarray, i, array) {
        // console.log('subarray', subarray);
        var ticker = subarray[2];
        return ticker === 'SCHD.US';
      });
    }

    $filterBox.show();

    $button.click(function () {
      var $wrapper = $('#calc-result'),
        // filter = [me.getValsWeight(), me.getValsGender(), me.getValsBelt().toLowerCase() , me.getValsAge()],
        data = calculate(json);
      console.log('*** data', data);

      $wrapper.empty();
      me.createList($wrapper, data);
      me.scrollTo($wrapper);
    });
  },


  /*el - jQuery element*/
  scrollTo: function (el) {
    $('html, body').animate({
      scrollTop: el.offset().top
    }, 1000);
  },

  createList: function ($wrapper, dataArr) {

    var $ulSCSS = $('<ul class="list-group mb-4">').appendTo($wrapper),
      me = this;
    var sum = 0;
    var sumCount = 0;
    var sumPrice =0;
    var avgPrice = 0;
    dataArr
      .map(function (item) {

        let col = {
          rahunok: item[0],
          numberDeal: item[1],
          tiker: item[2],
          isin: item[3],
          type: item[4],
          place: item[5],
          operation: item[6],
          count: item[7],
          price: item[8],
          currency: item[9],
          sum: item[10],
          gain: item[11],
          exchange: item[12],
          gainInSelectedCurrancy: item[13],
          fee: item[14],
          day: item[15]
        }
        
        if(col.operation === " Купівля ") {
          sum = Number(col.gain) + sum;
          sumCount += Number(col.count);
          sumPrice += Number(col.count) * Number(col.price );
        } else {
          sumCount = sumCount - Number(col.count);
          sumPrice = sumCount - Number(col.count) * Number(col.price);
        }
        
        console.log('========== sumCount', sumCount);
        console.log('========== sumCount', sumPrice);

        $ulSCSS.append(
          "<li class='list-group-item custom_select__item list-unstyled'>" +
          "<p>tiker:" + col.tiker + " <b>" + col.type + " , </b><b> " + col.count 
          + "</b>price: " +col.price+ " gain: "+ col.gain + " operation: " + col.operation+ " <p>" +
          "<span> fee: " + col.fee + "</span>" +
          "</li>"
        )
      });

    var buildStageOneHandler = function (e) {
      //console.log(dataArr);
      function toObj(arr) {
        var arrOfobj = [];
        arr.forEach(function (item) {
          arrOfobj.push({
            'name': item[0],
            'last_name': item[1],
            'weight': item[2],
            'date': item[3],
            'genre': item[4],
            'team': item[5],
            'isFight': item[6],
            'isTul': item[7]
          }
          );
        });

        return arrOfobj;
      }
      
      var msg = `
        <p>
          sum stock count:  ${sumCount};
        </p>
        <p>
          sumPrice: ${sumPrice};
        </p>
        <p>
          avg: ${Number(sumPrice/sumCount).toFixed(2)};
        </p>
      `
      me.showCheckedRounds(msg, $wrapper);
      me.scrollTo($wrapper);
    };

    this.addButton($wrapper, buildStageOneHandler, 'To pairs');
  },

  /**
   *
   * @param $wrapper - DOM element
   * @param handler - function on click
   */
  addButton: function ($wrapper, handler, btnText) {
    var $button = $('<button class="btn btn-outline-success">').appendTo($wrapper).text(btnText);
    $button.on('click', handler);
  },

  /**
   *
   * @param pairs - arr of 2d arrays [ [[player-1],[player-2]], [[player-1],[player-2]] ... ]
   * @param $wrapper - DOM element
   */
  showCheckedRounds: function (priceAvarage, $wrapper) {
    var $ul = $('<div class="list-group mt-4" id="pairs-results">');

    $('#pairs-results').remove();
    // pairs.forEach(function (item) {
    //   var fPl = item[0], secPl = item[1],
    //     f_name = fPl[0],
    //     f_date = fPl[3],
    //     f_team = fPl[5],
    //     f_weight = fPl[2],
    //     outPutLi,
    //     errClass = '';

    //   if (item[1] && fPl[5] === secPl[5])
    //     errClass = 'list-group-item-danger';
    //   else errClass = '';

    //   outPutLi = (item[1])
    //     ? "<li class='list-group-item custom_select__item list-unstyled " + errClass + "'>" +
    //     "<p>id:" + fPl[9] + " <b>" + f_name + " , </b><b> " + f_team + "</b> вес: " + f_weight + "<p>" +
    //     "<b class='mr-4 ml-4'>-==VS==-</b>" +
    //     "<p>id:" + item[1][9] + " <b>" + item[1][0] + " , </b><b> " + item[1][5] + "</b> вес: " + item[1][2] + "<p>" +
    //     "</li>"
    //     : "<li class='list-group-item custom_select__item list-unstyled'>" +
    //     "<p>id:" + fPl[9] + " <b>" + f_name + " , </b><b> " + f_team + "</b> вес: " + f_weight + "<p>" +
    //     "</li>";

    //   $ul.append(outPutLi)
    // });
    $ul.append(priceAvarage)
    $ul.appendTo($wrapper);
  },

  callTestDataDropSheet: function (cbOnSheet) {
    var $button = $('#load-demo-file');
    $button.on('click', function () {
      console.log('click');
      var data = uiHandler.dataMock;
      cbOnSheet(data, []);
    });
  }

});
