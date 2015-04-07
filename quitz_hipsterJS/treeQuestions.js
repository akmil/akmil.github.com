'use strict';

var app = angular.module('quitz', []);
app.factory('DBQuestionsSrv', function() {
    var questions = [
        //child   parent
        ['q1', '---', 'what you do now?'],
        ['chield1', 'q1', 'drink beer', 'i guess you not interesting person, goodbye'],
        ['chield2', 'q1', 'sleep (choose me) ', 'good, how often do you sleep?'],
        ['chield3', 'q1', 'jump', 'you good men, relax, take it easy'],
        ['chield1-lvl2', 'chield2', 'every hour', 'get up, lazy, it time to work'],
        ['chield2-lvl2', 'chield2', 'every day', 'lucky you!, I have no more questions'],
        ['chield3-lvl2', 'chield2', 'every night (choose me)', 'right way to go, and with who?'],
        ['chield1-lvl3', 'chield3-lvl2', 'alone', 'you are proud person'],
        ['chield2-lvl3', 'chield3-lvl2', 'not alone‘', 'greetings'],
        /*leaf for Js question*/
        ['chield4', 'q1', 'learn JavaScript', 'good, are you sure?'],
        ['chield41-lvl1', 'chield4', 'yes', 'Do you hipster?'],
        ['chield42-lvl1', 'chield4', 'no', 'I guess you like AC/DC, go and lenar C++'],
        ['chield4-lvl2', 'chield41-lvl1', 'yes', 'Greetings, Soon you become an JS developer'],
        ['chield41-lvl2', 'chield41-lvl1', 'no', 'Its bad, come again and I will buy you a glasses, so you automaticly became a hipster.']
    ];

    return questions;
});

app.controller('qiutzController', function($scope, DBQuestionsSrv) {
    var i = 0,
        counter = 0,
        jNextParentLvl = 0,
        current_chield = [];

    var questions = DBQuestionsSrv;
    var questionsLength = questions.length;

    var setCurrentQ = function(_setQ) {
        //set selected 'chield.chName' as parent
        $scope.parent = _setQ;
    };

    $scope.questions = questions;
    $scope.node = 'parent';
    $scope.chield = current_chield;
    $scope.parent = questions[0][2];
    //console.log('*** parent', $scope.parent);
    
    $scope.result = {
        diagnoz: questions[0][2],
        finresult: [],
        show: true
    };

    $scope.watch = function(_question) {
        var itemfound = 0;
        $scope.result.finresult.push({"currentQ": $scope.qestionRadiomedel.ansver});

        setCurrentQ(_question); //set new parent

//        console.log('I choose = :\n', _question);
        current_chield.splice(itemfound);//delete old child
        console.log('end jNextParentLvl(' + questionsLength + ' minus ' + jNextParentLvl + ') iterations');
        for (i = jNextParentLvl; i < questionsLength; i++) {
            $scope.node = questions[i][1];

            if ($scope.node === _question) {
//                console.log(node.name + ' ask...variant of answ:', chield.chName);

                //get answer and set as node
                current_chield.push({"currentQ": questions[i][2], "curChield": questions[i][0]});

                itemfound++;
                jNextParentLvl++;
            }
            //history of quitz
            if (questions[i][0] === _question) {
                $scope.result.diagnoz = questions[i][3];
            }
            counter++;//for testing 
        }

        //empty Arr check
        if (current_chield == false) {
            // console.log('empty Arr current_chield: -end of Quitz', current_chield,'\nresult:', $scope.result);
            $scope.isShowFlag.flFinalAlert = true;//show fin alert
            $scope.isShowFlag.flagBtn = true;//show start btn
            $scope.result.show = true;
        }
        console.log('counter', counter);
    };

    $scope.qestionRadiomedel = {
        ansver: 'none' //key        
    };

//start btn show/hide
    $scope.isShowFlag = {
        flagBtn: true, //start btn
        flagQuestion: false, //info panel
        flFinalAlert: false //final alert
    };
    
    $scope.toggleInfo = function() {
        $scope.isShowFlag.flagQuestion = !$scope.isShowFlag.flagQuestion;
        return $scope.flagQuestion;
    };
    
    $scope.toggle = function() {
        /*if(result.finresult.length =>1 ){
         $scope.result.diagnoz = "Lets try again, so "+questions[0][2]
         }else */$scope.result.diagnoz = questions[0][2];
        $scope.isShowFlag.flFinalAlert = !true;//hide fin alert
        $scope.isShowFlag.flagBtn = !$scope.isShowFlag.flagBtn;
        return $scope.isShowFlag;
    };
    
    $scope.resetNextParentLvl = function() {
        jNextParentLvl = 0;
    };
    
});