'use strict';

var app = angular.module('quitz', []);
app.factory('DBQuestionsSrv', function() {
    var questions = [
        //child   parent  question/result        answer
        ['q1',      '---', 'what you do now?',        ' ',],
        ['chield1', 'q1' , 'drink beer ' , 'can you share it with me?'],
        ['chield1-lvl1-1', 'chield1'    , 'yes I share it with you :)', 'OK you be me friend. The End.'],
        ['chield1-lvl1-2', 'chield1'    , 'no, of course not!', 'Heh, it all you. The End.'],
        
        ['chield2', 'q1', 'sleep', 'good, how often do you sleep?'],
        ['chield3', 'q1', 'jump ', 'you good men, relax, take it easy'],
        ['chield1-lvl2', 'chield2', 'every hour ', 'get up, lazy, it time to work'],
        ['chield2-lvl2', 'chield2', 'every day', 'lucky you!, I have no more questions'],
        ['chield3-lvl2', 'chield2', 'every night', 'right way to go, and with who?'],
        ['chield1-lvl3', 'chield3-lvl2', 'alone ', 'you are proud person'],
        ['chield2-lvl3', 'chield3-lvl2', 'not alone ', 'greetings'],
        /*leaf for Js question*/
        ['chield4', 'q1', 'learn JavaScript ', 'good, are you sure?'],
        ['chield41-lvl1', 'chield4', 'yes ', 'Do you hipster?'],
        ['chield42-lvl1', 'chield4', 'no ', 'I guess you like AC/DC, go and lenar C++'],
        ['chield4-lvl2', 'chield41-lvl1', 'yes ', 'Greetings, Soon you become an JS developer '],
        ['chield41-lvl2', 'chield41-lvl1', 'no ', 'Its bad, come again and I will buy you a glasses, so you automaticly became a hipster.']
    ];

    return questions;
});

app.controller('qiutzController', function($scope, DBQuestionsSrv) {
    var i,current_chield = [];
    var questions = DBQuestionsSrv;

    var questionsLength = questions.length;
    var Node = function Node(_name) {
        this.name = _name;
    }

    var Chield = function(_chName) {
        this.chName = _chName;
    };
    var node = new Node('parent');
    var chield = new Chield('chield');
    var counter = 0;
    var getCurrentQ = function(_whoAsk) {
        $scope.parent = _whoAsk;
        return $scope.parent;
    }
    var setCurrentQ = function(_setQ) {
        //set selected 'chield.chName' as parent
        $scope.parent = _setQ;

        console.log('\nset new parent', $scope.parent);
    }
    $scope.questions = questions;

    $scope.result = {
        diagnoz: questions[0][2],
        finresult: [],
        show: true
    };
    $scope.AddResult = function(_txtFromRadioBtn) {
        //$scope.result.diagnoz=_txtFromRadioBtn;

        //now find it in question Array
        for (i = 0; i < questionsLength; i++) {
            if (questions[i][0] === _txtFromRadioBtn) {
                $scope.result.diagnoz = questions[i][3];
            }
        }
    };

    $scope.node = node;
    $scope.chield = current_chield;

    $scope.parent = questions[0][2];

    $scope.watch = function(_question) {
        var itemfound = 0;
        var jNextParentLvl = 0;//add it to decrease iteration in loop
        $scope.result.finresult.push({"currentQ": $scope.qestionRadiomedel.ansver});

        setCurrentQ(_question);
        //node.name = _some;
        console.log('I choose = :\n', _question);
        current_chield.splice(itemfound);//delete old child

        for (i = jNextParentLvl; i < questionsLength; i++) {
            //chield.chName = questions[i][0];//key
            chield.chName = questions[i][2];//question for parent
            node.name = questions[i][1];

            if (node.name === _question) {
                console.log(node.name + ' ask...variant of answ:', chield.chName);
                //bool = false;
                current_chield.push({"currentQ": questions[i][2], "curChield": questions[i][0]});
                itemfound++;
            }
            counter++;
            jNextParentLvl++;
        }

        if (current_chield == false) {
            $scope.isShowFlag.flFinalAlert = true;//show fin alert					
            $scope.isShowFlag.flagBtn = true;//show start btn            		
            $scope.result.show = true;
        }
        console.log('counter', counter);
    }

    $scope.qestionRadiomedel = {
        ansver: 'none'
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

    $scope.isCapitalized = function(str) {
        return str[0] == str[0].toUpperCase();
    }

    console.log('=======');
    console.log('last node.name:', node.name);
});
