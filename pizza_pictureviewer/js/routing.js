//var appNameMy = angular.module('basicApp', []);

//angular.module("KendoDemos", [ "kendo.directives" ])
//      .controller("MyCtrl", function($scope){
//      });

//data access
appNameMy.config(function($routeProvider) {
    $routeProvider
            .when('/view1', {controller: 'sliderCtrl', templateUrl: 'viewAng/view1.html'})
            .when('/cornerScroller', {controller: 'sliderCtrl', templateUrl: 'viewAng/cornerScroller.html'})
            .when('/character-animation',{controller:'sliderCtrl', templateUrl:'viewAng/animation-testing.html'})
            .when('/pizza-constructor',{controller:'pizzaConstructorCtrl', templateUrl:'viewAng/pizza-constr/create.html'})
//            .when('/character-animation',{controller:'characterAnimationController' ,template:'<div>welcome in characterAnimationController <p><a href="#">go to view1.html</a></p></div>'})
            .otherwise({redirectTo: '/cornerScroller'});
});