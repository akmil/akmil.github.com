'use strict';


appNameMy.controller('pizzaConstructorCtrl', function($scope, factoryPizza,$window) {  
//    $scope.constructorData = factoryPizza.factoryPizzaArr();
 $scope.tabs = [
    { title:'Meat and Fish', content:'Dynamic content 2', disabled: true },
    { title:'Cheese', content:'Dynamic content 1' }    
  ];
  
//  $scope.multiplier = 1;
$scope.finalPriceModel =[];//array of objects
$scope.finalPrice = 0;
  
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
        
    
     
     $scope.add = function (_price, _id, _name ,_radioModel){  
         console.log(" radioModel: "+ _radioModel);
         if (_radioModel === 'Full'){
             _price = _price * 1;
         }else _price = _price * 0.5;
         
         $scope.finalPriceModel.push({ name: _name, id: _id ,price: _price , radioModel: _radioModel});
         
         $scope.finalPrice =$scope.finalPrice + _price;
         
         console.log('price:',_price,' multiplief:', $scope.multiplier ," add is "+$scope.finalPriceModel);
         
     };   
     $scope.clear = function (){
        $scope.finalPriceModel =[];
     };
     $scope.deleteItem = function (row){  
            var index = $scope.finalPriceModel.indexOf(row);
            console.log('index is ', index);
            if (index !== -1) {
                $scope.finalPriceModel.splice(index, 1);            
            };
     };
     $scope.sentPost = function (){
         alert('pizza in your basket total price is'+ $scope.finalPrice);
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

