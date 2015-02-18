'use strict';

var appNameMy = angular.module('basicApp', ['ngRoute','ngColorPicker','ui.bootstrap']);

//    controller       

appNameMy.controller('sliderCtrl', function ($scope, $timeout, nameFactory) {
    $scope.timeOut = 0;
    $scope.speedRange = 100;//default
     //$scope.delay = $scope.speedRange;
    var boolean = true;
    $scope.colors = [
        '#8E2800',
        '#e1e1e1'
    ];
    $scope.selected = '#e1e1e1';
    // Set of Photos
    $scope.photos = nameFactory.getCustomers();
     $scope.armor_layer01 = nameFactory.getArmor_layer01();
    $scope.layer02 = nameFactory.getWeaponsLayer02();

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function(index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function() {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };


    // show next image
    $scope.showNext = function() {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // play images
    $scope.play = function(delay) {
//        $scope.timeOut = timeOutMs;
delay = $scope.speedRange;
        console.log("start play, delay: ", delay);

        $scope.timeOut = $timeout(function() {
            //timeOut=200;            
            $scope.showNext();
            $scope.play(delay);
        },delay);
    };

    $scope.stop = function() {
        $timeout.cancel($scope.timeOut);//timeOut=0
        console.log("$scope.timeOut: ",$scope.timeOut.toLocaleString());
    };

    $scope.switchtoPosters = function() {
        if (boolean){
            $scope.photos = nameFactory.getPosters();
            console.log($scope.photos.length);
        }else{
            $scope.photos = nameFactory.getCustomers();
            console.log($scope.photos.length);
            }
        boolean = !boolean;
    };

    // show a certain image
    $scope.showPhoto = function(index) {
        $scope._Index = index;
    };
});




