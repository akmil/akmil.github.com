Array.prototype.shuffle = function () {
  let m = this.length, i;
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this;
};

var arr, pairs, sortedByTeam;
  /*json = [
    ["roma", "atom", "+"],
    ["roma", "atom", "+"],
    ["nazar", "atom", "+"],
    ["kostya", "Scorpion", "+"],
    ["nastya", "Scorpion", "+"],
    ["kolya", "koodo", "+"],
    ["fedya", "koodo", "+"],
    ["griha", "koodo", "+"],
    ["makss", "koodo", "+"],
    ["orest", "koodo", "+"],
    ["anya", "scorpion", "+"],
    ["wa", "woo", "+"],
    ["wu", "woo", "+"],
    ["wje", "woo", "+"],
    ["wjo", "woo", "+"],
    ["katya", "scorpion", "+"]
  ];*/


var filterHelper = {
  // uniqueNames: uniqueNames,
  // removeDublicateItems: removeDublicateItems,
  // sortByTeam: sortByTeam,
  // pairsSplit: pairsSplit,
  showCheckedRounds: showCheckedRounds,
  init: init
};

//check for unique Names ( item[0] )
function uniqueNames(json) {
  var itemToSplice = []
  json
    .map(item => item[1]) // map to [ ["1", "2"], ["1", "3"], [] ]
    .reduce((prev, curr) => prev.concat(curr), []) // flatten to [ "1", "2", "1", "3" ]
    .filter((item, i, arr) => {
      if (arr.indexOf(item) !== i) {
        console.log('to remove', i, json[i], item);
        itemToSplice.push(i);
      }
      return arr.indexOf(item) === i
    });// filter unique [ "1", "2", "3" ]
  return itemToSplice
}

function removeDublicateItems(arr, idx) {
  idx.forEach(function (i) {
    arr.splice(arr[i], 1);
  });
}

function sortByTeam(arr) {
  return arr.sort(function (a, b) {
      a[1] = a[1].toLowerCase();
      b[1] = b[1].toLowerCase();
      return (a[1] > b[1] ? 1 : (a[1] < b[1] ? -1 : 0));
    }
  );
}

function pairsSplit(arr , teamIdx) {

  function chechArrPairs(first, second, len ) {
    var isReshuffle = false;
    for (var j = 0; j < len; j++) {
      if (second[j] && first[j][teamIdx] !== second[j][teamIdx] || typeof second[j] === 'undefined') {
      } else {
        // console.log('11no opp' , first[j][1], second[j]);
        isReshuffle = true;
        break;
      }
      if (!second[j]) {
        // console.log('\t 1- second[j]' , second[j]);
        isReshuffle = false;
      }
    }
    return isReshuffle;
  }

  var first = [], second = [],
    resultingPairs = [],
    isReshuffle = false,
    len = Math.ceil(arr.length / 2); // 9 (for arr.len=17)

  //split in 2 arr
  for (var i = 0; i < arr.length; i++) {
    (i < len)
      ? first.push(arr[i])
      : second.push(arr[i])
  }

  // shuffle
  var isReshuffle = true, max = 0;
  while (isReshuffle || max === 10) {
    first.shuffle();
    second.shuffle();
    isReshuffle = chechArrPairs(first, second, len);
    max++;
    console.log('need to re-shuffle ', isReshuffle , max);
  }


 /* first.shuffle();
  second.shuffle();
  isReshuffle = chechArrPairs(first, second, len);
  console.log('need to re-shuffle ', isReshuffle , max);
  */
  ///tmp


  //merge in one array
  for (var j = 0; j < len; j++) {
    resultingPairs.push([first[j], second[j]]);
  }
  return resultingPairs;
};

function showCheckedRounds(pairs , $wrapper) {
  /*console.log('pairs', pairs.length);

  console.groupCollapsed();
  pairs.forEach(function (item) {
    (item[1])
      ? console.log(item[0][0], item[0][5]  + ' -vs- ' + item[1][0], item[1][5])
      : console.warn(item[0] + ' -vs- ' + item[1]);
  });
  console.groupEnd();*/

  var $ulSCSS = $('<ul class="list-group mt-4">').appendTo($wrapper);
    pairs.forEach(function (item) {
      var fPl = item[0], secPl = item[1],
        f_name = fPl[0],
        f_date = fPl[3],
        f_team = fPl[5],
        f_weight = fPl[2];

      var txt ='';
      txt = (item[1])
        ?  "<li class='list-group-item custom_select__item list-unstyled'>"+
            "<p>id:"+ fPl[9] +" <b>"+f_name+" , </b><b> "+f_team+"</b> вес: "+ f_weight+"<p>" +
            "<b class='mr-4 ml-4'>-==VS==-</b>" +
            "<p>id:"+ item[1][9] +" <b>"+item[1][0]+" , </b><b> "+item[1][5]+"</b> вес: "+ item[1][2]+"<p>" +
            "</li>"
        : "<li class='list-group-item custom_select__item list-unstyled'>"+
          "<p>id:"+ fPl[9] +" <b>"+f_name+" , </b><b> "+f_team+"</b> вес: "+ f_weight+"<p>" +
          "</li>"

      $ulSCSS.append(txt)
    });
}

function init(json) {
  var teamIdx = 5,
    itemToSplice = uniqueNames(json);

  removeDublicateItems(json, itemToSplice);
  sortedByTeam = sortByTeam(json);
  pairs = pairsSplit(sortedByTeam , teamIdx);
  // showCheckedRounds(pairs); //toDo remove
  return pairs;
}

// console.log("start", json.length);
// init(json);

/*function toObj(arr){
 var arrOfobj = [];
 arr.forEach(function(item){
 arrOfobj.push( {
 'name': item[0],
 'last_name': item[1],
 'weight': item[2],
 'date': item[3],
 'genre': item[4],
 'team': item[1],
 'isFight': item[2],
 'isTul' : item[7]}
 );
 });

 return arrOfobj;
 }*/
