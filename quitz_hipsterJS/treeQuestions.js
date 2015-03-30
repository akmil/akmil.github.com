'use strict';

var app = angular.module('quitz', []);

app.controller('qiutzController', function($scope) {
    var i,bool = true,
            current_chield = [],
            questions = [
                //child   parent
                ['q1', '---', 'what you do now?'],
                ['chield1', 'q1', 'drink beer 🍺', 'i guess you not interesting person, goodbye'],
                ['chield2', 'q1', 'sleep (choose me) 😴','good, how often do you sleep?'],
                ['chield3', 'q1', 'jump 🏄', 'you good men, relax, take it easy'],
				
                ['chield1-lvl2', 'chield2', 'every hour 🕐', 'get up, lazy, it time to work'],
                ['chield2-lvl2', 'chield2', 'every day 🌞', 'lucky you!, I have no more questions'],
                ['chield3-lvl2', 'chield2', 'every night (choose me) 🌜','right way to go, and with who?'],
				
                ['chield1-lvl3', 'chield3-lvl2', 'alone 🚀', 'you are proud person'],
                ['chield2-lvl3', 'chield3-lvl2', 'not alone 💑', 'greetings'],
				/*leaf for Js question*/
				['chield4', 'q1', 'learn JavaScript 😀', 'good, are you sure?'],
				
				['chield41-lvl1', 'chield4', 'yes 👍', 'Do you hipster?'],
                ['chield42-lvl1', 'chield4', 'no 🎸', 'I guess you like AC/DC, go and lenar C++'],
				
				['chield4-lvl2', 'chield41-lvl1', 'yes 👓', 'Greetings, Soon you become an JS developer 🏁'],
                ['chield41-lvl2', 'chield41-lvl1', 'no 🙊', 'Its bad, come again and I will buy you a glasses, so you automaticly became a hipster.']
	
							
            ];
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
		diagnoz:questions[0][2],
        finresult: [],
        show: true
    };
    $scope.AddResult = function(_txtFromRadioBtn) {
        //$scope.result.diagnoz=_txtFromRadioBtn;
		
		//now find it in question Array
		for (i = 0; i < questions.length; i++) {
			if ( questions[i] [0] === _txtFromRadioBtn) {
				$scope.result.diagnoz = questions[i][3];
			}
		}
    };

    $scope.node = node;
    $scope.chield = current_chield;

    $scope.parent = questions[0][2];
//console.log('questions[0][2]', questions[0][2]);
//console.log('*** parent', $scope.parent);

    $scope.watch = function(_question) {
        var itemfound = 0;
        //var  bool = true;   
       $scope.result.finresult.push({"currentQ": $scope.qestionRadiomedel.ansver});

        setCurrentQ(_question);
        //node.name = _some;
        console.log('I choose = :\n', _question);
        current_chield.splice(itemfound);//delete old chield

        for (i = 0; i < questions.length; i++) {
            chield.chName = questions[i][0];//key
            chield.chName = questions[i][2];//question for parent
            node.name = questions[i][1];

            //console.log(i );

            if (node.name === _question) {
                console.log(node.name + ' ask...variant of answ:', chield.chName);
                bool = false;
                current_chield.push({"currentQ": questions[i][2], "curChield": questions[i][0]});

                console.log('$scope.chield', $scope.chield);
                //get answer and set as node
				
				//useless if...need to delete
				//if(bool){ console.log('end of chain/ not found chield for:', $scope.parent);
				//	$scope.result.diagnoz=questions[i][3];
 				//	}
			//$scope.result.diagnoz=questions[i][3]; //adding last diagnoz
                itemfound++;
            }
            counter++;
        }
    
        if (current_chield == false) {
            console.log('empty Arr current_chield: -end of Quitz', current_chield,
                    '\nresult:', $scope.result);
					$scope.isShowFlag.flFinalAlert = true;//show fin alert
					$scope.isShowFlag.flagBtn = true;//show start btn
            		$scope.result.show = true;
               }
        console.log('counter', counter);
    }

    $scope.qestionRadiomedel = {
        ansver: 'none'
    };
    $scope.clerArr = function() {
       // current_chield = [];
    };
//start btn show/hide
    $scope.isShowFlag = {
		flagBtn:true,
		flagQuestion:false,
		flFinalAlert:false
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
//
	$scope.isCapitalized =function(str) { 
		return str[0] == str[0].toUpperCase(); 
	}

//testing
//$scope.choose('q1');
//$scope.watch('q1');
//$scope.choose('chield2');
//$scope.watch();
//$scope.choose('chield2-lvl2');
//$scope.watch();

    console.log('=======');
    console.log('last node.name:', node.name);
});
