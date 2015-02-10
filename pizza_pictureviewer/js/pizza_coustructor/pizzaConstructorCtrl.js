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
    
    //$scope.finalPriceModel.push({sizePizza: _size});
//    console.log('$scope.finalPriceModel[0].sizePizza' , $scope.finalPriceModel[0].sizePizza);

/*
    var i= 0;
    for(i=0;i< $scope.finalPriceModel.length; i++){
    if ($scope.finalPriceModel.sizePizza === 'undefined'){        
        $scope.finalPriceModel[0].push({sizePizza: _size});
    }else{
        console.log('else ');
        $scope.finalPriceModel.unshift({sizePizza: _size});
    }
    }
 */
        
//        else{ 
//            $scope.finalPriceModel[0].push({sizePizza: _size}); 
//
//        }

        
        //console.log('$scope.finalPriceModel.sizePizza ' , $scope.finalPriceModel[0].sizePizza);
        return $scope.pizzaSize = _size;
    };    
     
     $scope.add = function (_price, _id, _name ,_radioModel){  
         //console.log(" radioModel: "+ _radioModel,'pizzaSize: ', $scope.pizzaSize);
         var _size  = 0;
         if (_radioModel === 'Full'){
             _price = _price * 1;
         }else _price = _price * 0.5;
         $scope.finalPriceModel.push({ name: _name, id: _id ,price: _price , radioModel: _radioModel});
         $scope.finalPrice =$scope.finalPrice + _price;
         console.log('price:',_price,' multiplief(radioModel):', _radioModel ," add is " + $scope.finalPriceModel[$scope.finalPriceModel.length-1].price);
     };
     
     $scope.clear = function (){
        $scope.finalPriceModel =[];
        $scope.finalPrice = 0;
     };
     
     $scope.deleteItem = function (row){  
            var index = $scope.finalPriceModel.indexOf(row);
            console.log('index is ', index);
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
  
  
});

