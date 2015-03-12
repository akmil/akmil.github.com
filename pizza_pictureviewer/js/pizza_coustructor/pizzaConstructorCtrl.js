'use strict';


appNameMy.controller('pizzaConstructorCtrl', function($scope, factoryPizza, shareFiller) {  
//    $scope.constructorData = factoryPizza.factoryPizzaArr();
 $scope.tabs = [
    { title:'Meat and Fish', content:'Dynamic content 2', disabled: true },
    { title:'Cheese', content:'Dynamic content 1' }    
  ];
  
//  $scope.multiplier = 1;
$scope.finalPriceModel =[];//array of objects
$scope.finalPrice = 0;
$scope.pizzaSize = 0;
var i =0;
//$scope.quantityModel = {
//    quantity:0,
//    size:0
//};//always will be 1 item
$scope.quantity = shareFiller.quantityFiller;
//console.log($scope.quantity);
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
    //console.log('you choose size ' , _size);    
       return $scope.pizzaSize = _size;
    };
    
    function isArrElem(_arrayElem, _model, incORdec) {        
        bool = false;
        //console.log('_arrayElem:', _arrayElem); 
//        (_model === 'undefined')? $scope.finalPriceModel[i].radioModel='tmpModel':0;  
//         console.log(_model);

        for (i = 0; i < $scope.finalPriceModel.length; i++) {
            
//            //check if exist element for decrease 
//            if(!incORdec){
//                if (_arrayElem !== $scope.finalPriceModel[i].name) {                
//                    console.log('_arrayElem not found',_arrayElem);                
//                    bool = true;                 
//                    }
//            }
            //console.log('quantity_1; ',$scope.finalPriceModel[i].quantity, 'name',_arrayElem);            
            //console.log('$scope.finalPriceModel[i].name:',$scope.finalPriceModel[i].name);
            if (_arrayElem === $scope.finalPriceModel[i].name) {                 
                if(incORdec){
                     //$scope.totalCounter++;
                     $scope.finalPriceModel[i].quantity++;
                     console.log('quantity_2: ',$scope.finalPriceModel[i].quantity);
                 }else if($scope.finalPriceModel[i].quantity > 1){                  
                        $scope.finalPriceModel[i].quantity--; 
                    //$scope.totalCounter--;
                     //console.log('if quantity  :',$scope.finalPriceModel[i].quantity);
                    }else {
                         $scope.finalPriceModel[i].quantity = 0;
                         if ($scope.finalPriceModel[i].quantity === 0){
                             console.log('quantity_3: ',$scope.finalPriceModel[i].quantity);
                            console.log('return here \n');
                            //return; 
                         }
                         //var index = $scope.finalPriceModel.indexOf(i);                         
                         //console.log('index is ', index, "i: " + i);                            
                         
                                                 
                         $scope.deleteItem($scope.finalPriceModel[i]);//recive obj={name:...,price:...}, not index
                         }                          
                bool = true;                
                //document.getElementById("console").innerHTML = 'found: ' + $scope.finalPriceModel[i] + ' ,index is ' + $scope.finalPriceModel.indexOf(_arrayElem) + ' ,isArrElem(bool): ' + bool + '; counter' + $scope.totalCounter;
            }            
            /*else{ }*/
        }
//         console.log('bool: ',bool);
    };
    
    $scope.decreaseItem = function (_price, _id, _name ,_radioModel , _quantity){
        //check if exist element for decrease 
        for (i = 0; i < $scope.finalPriceModel.length; i++) {
                if (_name !== $scope.finalPriceModel[i].name) {                
//                    console.log('_name not found',_name);                                    
                    return;
                    }
        }
         if (_radioModel === 'Full'){
             _price = _price * 1;
         }//else _price = _price * 0.5;
         isArrElem(_name, _radioModel,false);//false: is quantity--
        if (!bool) {
            //push new val of quantity
            $scope.finalPriceModel.push({ name: _name, id: _id ,price: _price , radioModel: _radioModel, quantity : _quantity}); 
        }
        $scope.finalPrice =$scope.finalPrice - _price;
    };
    
     $scope.add = function (_price, _id, _name ,_radioModel , _quantity){ 
    
         //$scope.quantityModel.size = _radioModel;
//         console.log("_quantity++",_quantity );
         if (_radioModel === 'Full'){
             _price = _price * 1;
         }//else _price = _price * 0.5;
        isArrElem(_name, _radioModel,true); //true: is quantity++
        if (!bool) {
            $scope.totalCounter++;
            $scope.finalPriceModel.push({ name: _name, id: _id ,price: _price , radioModel: _radioModel, quantity : _quantity}); 
        }
            
         $scope.finalPrice =$scope.finalPrice + _price;
         //$scope.quantity = shareFiller.quantityFiller++;
         //console.log('quantity_add:',$scope.quantity);
     };
     
     $scope.clear = function (){
        
       
        //wtf?? throw Error 
//        
//        function outputItem(item, i, arr) {
//            //alert(i + ": " + item.quantity + " (array is:" + arr + ")");
//            item.quantity = 0;
//          } 
//        $scope.finalPriceModel.forEach(outputItem);

        $scope.finalPrice = 0;
        $scope.quantity = shareFiller.quantityFiller;
        $scope.finalPriceModel =[];
        //shareFiller.quantityFiller = 0;
        console.log('quantityFiller is set to: ', $scope.quantity );
     };
     
     $scope.deleteItem = function (row){  
            var index = $scope.finalPriceModel.indexOf(row);
            //console.log('row',row, 'index is(deleteItem) ', index);
            //console.log('finalPrice is ', $scope.finalPrice ,'-',$scope.finalPriceModel[index].price, 'cur qant',$scope.finalPriceModel[index].quantity );
            $scope.finalPrice =$scope.finalPrice-$scope.finalPriceModel[index].price * $scope.finalPriceModel[index].quantity;            
            
            //check if empty
            if (index !== -1) {
                $scope.finalPriceModel.splice(index, 1);  
            }; 
           //console.log('row',row, 'index is(deleteItem) ', index,' <<<<is DELETED');
            
     };
     $scope.sentPost = function (){
         var totalPr = $scope.finalPrice + $scope.pizzaSize;
         alert('pizza in your basket total price is: ' + totalPr );
     };
     //return $scope.pizzaConstructorCtrl = this;
     
    
});
   appNameMy.controller('DropdownCtrl', function ($scope, shareFiller) {
   
//  $scope.status = {
//    isopen: false
//  };
//   $scope.toggled = function(open) {
//    $log.log('Dropdown is now: ', open);
//  };
  //this.quantity = shareFiller;
  
  $scope.radioModel = {
      size:'Full'
  };
  
  $scope.quantity = shareFiller.quantityFiller;
  $scope.quantityLocal = shareFiller;
  //console.log($scope.quantity); //this shown 16times
  
  $scope.increaseQuantity = function(/*_sizeRadioModel*/){ 
      $scope.quantity++;
      shareFiller.quantityFiller = $scope.quantity;
  };
  $scope.decreaseQuantity = function(){
        if ($scope.quantity > 1) {
            $scope.quantity--;
            //console.log('if quantity  :',$scope.finalPriceModel[i].quantity);
        } else{
            $scope.quantity = 0; 
        }     
  };
 
});

