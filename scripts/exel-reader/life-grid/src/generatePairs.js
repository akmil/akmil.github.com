Array.prototype.shuffle = function () {
  let m = this.length, i;
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this;
};

var arr, pairs, sortedByTeam;

var pairsHandler = {
  // uniqueNames: uniqueNames,
  // removeDublicateItems: removeDublicateItems,
  // sortByTeam: sortByTeam,
  // pairsSplit: pairsSplit,
  // showCheckedRounds: showCheckedRounds,
  init: init
};

//check for unique Names ( item[0] )
function uniqueNames(json) {
  var itemToSplice = [];

  json
    .map(item => item[1]) // map to [ ["1", "2"], ["1", "3"], [] ]
    .reduce((prev, curr) => prev.concat(curr), []) // flatten to [ "1", "2", "1", "3" ]
    .filter((item, i, arr) => {
      if (arr.indexOf(item) !== i) {
        // console.log('to remove', i, json[i], item);
        itemToSplice.push(i);
      }
      return arr.indexOf(item) === i
    });// filter unique [ "1", "2", "3" ]
  return itemToSplice
}

function removeDublicateItems(arr, itemToSplice) {
  itemToSplice.forEach(function (i) {
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
      } else { // console.log('11no opp' , first[j][1], second[j]);
        isReshuffle = true;
        break;
      }
      if (!second[j]) { // console.log('\t 1- second[j]' , second[j]);
        isReshuffle = false;
      }
    }
    return isReshuffle;
  }
  
  function checkBestResults(first, second , len) {
    var findEquals=0;
    for (var j = 0; j < len; j++) {
      if(second[j] && first[j][5] === second[j][5]){
        // console.log( first[j][0] , first[j][5], ' ==== ',second[j][5], second[j][0] );
        findEquals++;
        // break;
      }
    }
    // console.log( 'findEquals' , findEquals );
    return findEquals;
  }

  var first = [], second = [],
    resultingPairs = [],
    isReshuffle = true,
    len = Math.ceil(arr.length / 2); // 9 (for arr.len=17)

  //split in 2 arr
  for (var i = 0; i < arr.length; i++) {
    (i < len)
      ? first.push(arr[i])
      : second.push(arr[i])
  }

  // shuffle
  var max = 0,
    findEquals = checkBestResults(first, second , len); //3
  // console.log('start findEquals', findEquals);
  while (isReshuffle && max < Math.pow(arr.length ,2) ){
    first.shuffle();
    second.shuffle();
    isReshuffle = chechArrPairs(first, second, len);
    max++;
    if(checkBestResults(first, second , len) < findEquals ){  break;  }
  }

  //merge in one array
  for (var j = 0; j < len; j++) {
    resultingPairs.push([first[j], second[j]]);
  }
  return resultingPairs;
}


function init(json) {
  var teamIdx = 5,
    itemToSplice = uniqueNames(json);

  removeDublicateItems(json, itemToSplice);
  sortedByTeam = sortByTeam(json);
  pairs = pairsSplit(sortedByTeam , teamIdx);
  return pairs;
}

