
APP.factory('userDAO', ['$http', function($http) {
        //local Test array
        var users = [
            {index: 0, firstName: 'Bak', lastName: 'lastName0', email: 'test00@mail.com', is_active: true},
            {index: 1, firstName: 'Zip', lastName: 'lastName1', email: 'test01@mail.com', is_active: false},
            {index: 2, firstName: 'Kato', lastName: 'lastName2', email: 'test02@mail.com', is_active: true},
            {index: 3, firstName: 'Miki', lastName: 'lastName3', email: 'test03@mail.com', is_active: true},
            {index: 4, firstName: 'Fill', lastName: 'lastName4', email: 'test04@mail.com', is_active: false},
            {index: 5, firstName: 'Romm', lastName: 'lastName5', email: 'test05@mail.com', is_active: false}
        ];

        var //baseAddress = 'http://www.json-generator.com/api/json/get/bUsVCehYJe?indent=2';
            baseAddress='../DB/sampleDB.json';
        var last_id = users.length+1;
        
        var UserFactory = {};

        UserFactory.total = function() {
            return users.length;
        };
//pagination
//        UserFactory.getUsers = function(offset, limit) {
//            return users.slice(offset, offset + limit);
//        };
        UserFactory.getUsers = function() {
            return users;
        };

        UserFactory.setUser = function( firstName, lastName, email) {
            users.push({index: last_id, firstName: firstName, lastName: lastName, email: email, is_active: false});
            last_id++;
        };
        /*
        UserFactory.getUsersList = function() {
            url = baseAddress; 
            console.log('$http.get(url)', $http.get(url))
            return $http.get(url);
        };*/
        
        //messege notify
        var msg_history = [];
        var msg = 'welcome';

        UserFactory.setMsg = function(message) {
            msg = '...';
            msg = message;
            msg_history.push(message);//message history
            
        };

        UserFactory.getMsg = function() {
            return msg;
        };
        return UserFactory;
    }]);

APP.factory('UsersFactory', function($resource) {
    //var baseAddress='../DB/sampleDB.json';
    var baseAddress = 'http://www.json-generator.com/api/json/get/ceRqpnGkAy';    
    console.log('UsersFactory get ' , baseAddress);
        //baseAddress+'?status=401'
    
    return $resource(baseAddress, {}, {
        getAllRes: {method: 'GET', isArray: true, params:{indent:2}},
        removeMy: {method: 'POST', params:{status:401}},
        create: {method: 'POST', params:{status:401}}        
    });
    //return $resource(baseAddress);
});


