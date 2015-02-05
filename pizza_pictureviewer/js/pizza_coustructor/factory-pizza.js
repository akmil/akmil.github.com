//data access
appNameMy.factory('factoryPizza', function($http ,$q) {
    var factoryPizza = {};
    var jsonURL = 'http://www.json-generator.com/api/json/get/cbgpJYnybm?indent=2';
    var factoryPizzaArr = [];


//
//    factoryPizza.putCustomer = function putCustomer(customerPutName) {
//        factoryPizza.push({name: customerPutName, city: 'someCity'});
//    };
factoryPizza.getData = function(){
        var deferred = $q.defer();
        $http.get(jsonURL).success(function(data, s){
            deferred.resolve(data);
        }).error(function(err, s){
            deferred.reject(err);
        });
        return deferred.promise;
    };
    
    factoryPizza.getData_my = function() {
        console.log('factory loaded');
        return $http.get(jsonURL)
                .success(function(data, status) {
                    factoryPizzaArr.push({
                        data: data,
                        meatAndFish: data.meatAndFish,
                        sizePizza: data.sizePizza,
                        fruits: data.fruits,
                        souse: data.souse,
                        picture: data.picture,
                        prise: data.picture
                    });
                    this.data= data,
                    //console.log(data[0].meatAndFish[0].name + " has " + fruits + " public repositories!");
                    console.log('hey'+this.data);
                })
                .error(function(status) {
                    console.log(data + " (error) json", status);
                });

    };

    factoryPizza.factoryPizzaArr = function() {
        console.log(factoryPizzaArr);
        return factoryPizzaArr;
    };
    return factoryPizza;
});


