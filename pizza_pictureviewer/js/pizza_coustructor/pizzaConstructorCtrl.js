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
$scope.pizzaSize = 0;
var bool = false; //used in isArrElem
$scope.totalCounter = 'undefined';


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
        
    // should be singleton
    $scope.setSize = function (_size){
    console.log('you choose size ' , _size);    
       return $scope.pizzaSize = _size;
    };
    
    function isArrElem(_arrayElem, _model,incORdec) {        
        bool = false;
        console.log('_arrayElem:', _arrayElem);            
        for (var i = 0; i < $scope.finalPriceModel.length; i++) {
            console.log('$scope.finalPriceModel[i].name:',$scope.finalPriceModel[i].name);
            if (_arrayElem === $scope.finalPriceModel[i].name) { 
                if(incORdec){
                     //$scope.totalCounter++;
                     $scope.finalPriceModel[i].quantity++;
                 }else if($scope.finalPriceModel[i].quantity > 1){                    
                    $scope.finalPriceModel[i].quantity--; 
                    //$scope.totalCounter--;
                     //console.log('if quantity  :',$scope.finalPriceModel[i].quantity);
                    }else {
                         $scope.finalPriceModel[i].quantity = 0;
                         var index = $scope.finalPriceModel.indexOf(i);                         
                         console.log('index is ', index, "i: " + i);                            
                         console.log('price: ',$scope.finalPriceModel[i].price);                            
                         $scope.deleteItem($scope.finalPriceModel[i]);//recive obj={name:...,price:...}, not index
                         } 
                $scope.finalPriceModel[i].radioModel=_model;
                bool = true;                
                //document.getElementById("console").innerHTML = 'found: ' + $scope.finalPriceModel[i] + ' ,index is ' + $scope.finalPriceModel.indexOf(_arrayElem) + ' ,isArrElem(bool): ' + bool + '; counter' + $scope.totalCounter;
            }
            //do none
            /* else {                
                document.getElementById("info").innerHTML = 'else found: ' + $scope.finalPriceModel[i] + ' ,index is ' + $scope.finalPriceModel.indexOf(_arrayElem) + ' ,isArrElem(bool): ' + bool + '; counter' + $scope.totalCounter;
            }*/
        }
    };
    
    $scope.decreaseItem = function (_price, _id, _name ,_radioModel , _quantity){
        var i =0;
        console.log('_quantity: ',_quantity);
         
         if (_radioModel === 'Full'){
             _price = _price * 1;
         }else _price = _price * 0.5;
         isArrElem(_name, _radioModel,false);//true: is quantity--
        if (!bool) {
            
            $scope.finalPriceModel.push({ name: _name, id: _id ,price: _price , radioModel: _radioModel, quantity : _quantity}); 
        }
        
        $scope.finalPrice =$scope.finalPrice - _price;
    };
    
     $scope.add = function (_price, _id, _name ,_radioModel , _quantity){  
         var i =0;
          
         //console.log("_quantity++",_quantity );
         if (_radioModel === 'Full'){
             _price = _price * 1;
         }else _price = _price * 0.5;
         
         //$scope.finalPriceModel.push({ name: _name, id: _id ,price: _price , radioModel: _radioModel, quantity : _quantity});            
        isArrElem(_name, _radioModel,true); //true: is quantity++
        if (!bool) {
            $scope.totalCounter++;
            $scope.finalPriceModel.push({ name: _name, id: _id ,price: _price , radioModel: _radioModel, quantity : _quantity}); 
        }
        
         /*  
         //if first time select item
         if($scope.finalPriceModel.length === 0){
            $scope.finalPriceModel.push({ name: _name, id: _id ,price: _price , radioModel: _radioModel, quantity : _quantity});            
         }
// console.log('$scope.finalPriceModel.length: ',$scope.finalPriceModel.length); // 1,2          
          if ($scope.finalPriceModel[$scope.finalPriceModel.length-1].name === _name){
              $scope.finalPriceModel.pop();
              //$scope.finalPriceModel.pop();              
               //$scope.quantity = ++_quantity;               
               $scope.finalPriceModel.quantity = _quantity;
               $scope.finalPriceModel.push({ name: _name, id: _id ,price: _price , radioModel: _radioModel, quantity : _quantity});
              console.log("_quantity: ",_quantity);
               
          }else {
                $scope.finalPriceModel.push({ name: _name, id: _id ,price: _price , radioModel: _radioModel, quantity : _quantity});            
            }
            
         */     
         $scope.finalPrice =$scope.finalPrice + _price;
         //console.log( $scope.finalPriceModel );
     };
     
     $scope.clear = function (){
        $scope.finalPriceModel =[];
        $scope.finalPrice = 0;
     };
     
     $scope.deleteItem = function (row){  
            var index = $scope.finalPriceModel.indexOf(row);
            console.log('row',row, 'index is(deleteItem) ', index);
            console.log('finalPrice is ', $scope.finalPrice ,'-',$scope.finalPriceModel[index].price);
            $scope.finalPrice =$scope.finalPrice-$scope.finalPriceModel[index].price;            
            
            //check if empty
            if (index !== -1) {
                $scope.finalPriceModel.splice(index, 1);  
            };           
     };
     $scope.sentPost = function (){
         var totalPr = $scope.finalPrice + $scope.pizzaSize;
         alert('pizza in your basket total price is: ' + totalPr );
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
//  $scope.setSizeItem = function (_size){
//    console.log('you choose sizeItem ' , _size);    
//       return $scope.radioModel = _size;
//    };
  $scope.quantity = 0;
  
  $scope.increaseQuantity = function(){
      $scope.quantity++;
  };
  $scope.decreaseQuantity = function(){
        if ($scope.quantity > 1) {
            $scope.quantity--;
            //console.log('if quantity  :',$scope.finalPriceModel[i].quantity);
        } else{
            $scope.quantity = 0; 
        }
        //$scope.quantity--;      
  };
  
  $scope.clearQuantity = function(row){
      var index = $scope.finalPriceModel.indexOf(row);//imet in final Array
        
      $scope.quantity=0;
      console.log('index is quantoty:', index , '$scope.quantity: ',$scope.quantity);
  };
 
});

