'use strict';


appNameMy.controller('pizzaConstructorCtrl', function($scope, factoryPizza,$window) {  
//    $scope.constructorData = factoryPizza.factoryPizzaArr();
 $scope.tabs = [
    { title:'Meat and Fish', content:'Dynamic content 2', disabled: true },
    { title:'Cheese', content:'Dynamic content 1' }    
  ];
  
//  $scope.multiplier = 1;
  
  $scope.fullRightLeftHalf = ['full','left','right'];
  
function init(){
        
        var svc = factoryPizza;
        
        svc.getData().then(function(data, s){
            $scope.echoedVals = data;
            $scope.meats = data[0].meatAndFish;
            $scope.sizePizza = data[0].sizePizza;
            $scope.souse = data[0].souse;
            $scope.cheese = data[0].cheese;            
        }, function(err,s){
            alert(err);
        });
    }
    
    init();
    
//    console.log($scope.constructorData);
    $scope.setMultiplaer =function(multiplier) {
            $scope.multiplier = multiplier;
        };
        
     $scope.finalPriceModel =[];//array of objects
     
     $scope.add = function (_price, _id, _name ,_radioModel){  
         console.log(" radioModel: "+ _radioModel);
         if (_radioModel === 'Full'){
             _price = _price * 1;
         }else _price = _price * 0.5;
         
         $scope.finalPriceModel.push({ name: _name, id: _id ,price: _price , radioModel: _radioModel});
         
         //$scope.finalPriceModel =$scope.finalPriceModel + price * $scope.multiplier ;
         console.log('price:',_price,' multiplief:', $scope.multiplier ," add is "+$scope.finalPriceModel);
         
     };   
     $scope.clear = function (){
         $scope.finalPriceModel =[];
     };
     $scope.sentPost = function (){
         alert('pizza in your basket');
     };
     //return $scope.pizzaConstructorCtrl = this;
});
   appNameMy.controller('DropdownCtrl', function ($scope) {
   

//  $scope.status = {
//    isopen: false
//  };
//   $scope.toggled = function(open) {
//    $log.log('Dropdown is now: ', open);
//  };
  
  $scope.radioModel = 'Full';
  
  
});

