//data access
appNameMy.factory('factoryPizza', function($http ,$q) {
    var factoryPizza = {};
    var jsonURL = 'http://www.json-generator.com/api/json/get/bHwcvXHhsO?indent=2';
   
//    var factoryPizzaArr = []; //not used
//    var tmp = 0;
//    console.log('tmp',tmp);

factoryPizza.getData = function(){
        var deferred = $q.defer();
        $http.get(jsonURL).success(function(data, s){
            deferred.resolve(data);
        }).error(function(err, s){
            deferred.reject(err);
        });
        return deferred.promise;
    };
    
//    factoryPizza.shareFiller = function() {
//        //var quantityVar = 0
//        this.share = {
//            quantityFiller: 0
//        };
//        //console.log('shareFiller',this.share.quantityFiller);
//        return this;
//    };
    
    return factoryPizza;
})
.factory('shareFiller', function() {
    this.quantityFiller = 0;
    //console.log('shareFiller',this.share.quantityFiller);
    return this;
});


