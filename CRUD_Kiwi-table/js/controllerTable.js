APP.controller('tableCtrl', ['$scope', 'userDAO','UsersFactory', function($scope, userDAO, UsersFactory) {
        //<select> by: is_active
        
        $scope.options = [
            {label: 'show all', value: 'all'},
            {label: 'active', value: true},
            {label: 'not active', value: false}
        ];
        $scope.selected = $scope.options[0];
        
        $scope.templates =[
            {name: 'tableNonEdit.html', url: 'tableNonEdit.html'},
            {name: 'tableEditInput.html', url: 'tableEditInput.html'}
        ];
        $scope.template = $scope.templates[0];
        
        $scope.fields = [
            {placeholder: 'Username', type: 'text', isRequired: true},
            {placeholder: 'LastName', type: 'text', isRequired: true},
            {placeholder: 'Email (optional)', type: 'email', isRequired: false}
        ];
        
        $scope.factory = userDAO;
        //console.log(' factory '+ $scope.factory.total());
        $scope.users = userDAO.getUsers();
        
        //fetch users  JSON      
//        UsersFactory.query(function(data) {
//            $scope.users = data; 
//            //console.log($scope.users);
//        });
        
//        var user1 = UsersFactory.get({index: 0}, function(data) {
//            $scope.user[0] = data;
//            console.log('data: ', data);
//        });

        
        $scope.removeItem= function(row) {
            var _index = $scope.users.indexOf(row);
            var nameInfoTmp = $scope.users[_index].firstName;
            console.log(' remove ', row.index);
            $scope.users.forEach(function(users, _index) {
                if (users.index === row.index) {                  
                    $scope.users.splice(_index, 1);
                }
            });
            
//             UsersFactory.removeMy({index: row},function(){
//            $scope.users.forEach(function(users, _index) {
//                if (users.index === row.index) {                  
////                    users.$delete({index: row.index});
//                    $scope.users.splice(_index, 1);
//                }
//            });
//        });
            $scope.factory.setMsg(nameInfoTmp + ' is removed');
        };

        $scope.messageTest = function() {            
            $scope.factory.setMsg('generated message Test');
        };

        //modal
        $scope.modalShown = false;
        $scope.toggleModal = function() {
            $scope.modalShown = !$scope.modalShown;    
        };
        
        //create user
        $scope.submitForm = function(firstName, lastName, email) {
            $scope.factory.setUser(firstName, lastName, email);
            //set global msg
            $scope.factory.setMsg(firstName + ' is added ');
        };

        $scope.sorting = 'firstName';
        $scope.sortBy = function(sort) {
            if (sort === $scope.sorting) {
                $scope.sorting = "-" + sort;
            } else {
                $scope.sorting = sort;
            }
            $scope.factory.setMsg('sort by: ' + sort);
            // console.log('sortBy: ',sort,' $scope.sorting',$scope.sorting );
        };
        
        $scope.selectedT = {};
        $scope.getTemplate = function (contact) {
        if (contact.index === $scope.selectedT.index) return $scope.templates[1].url;
         else return $scope.templates[0].url;
        };
        
        $scope.saveContact = function(row) {
        // copy user for 'cancel' btn
        //$scope.selectedT = angular.copy($scope.users[row]);
            $scope.reset();
            //change template
            $scope.template = $scope.templates[0];
            $scope.factory.setMsg($scope.users[row].firstName + ' - is saved');
        };
        $scope.edit = function(contact) {
            $scope.selectedT.index = contact.index;
           $scope.template = $scope.templates[1];
           //$scope.selected = angular.copy(contact);
//           console.log( '$scope.selectedT.index: ',$scope.selectedT.index );
        };
        
        $scope.reset = function () {
            $scope.selectedT = {};
        };

        /*pagination*/
        $scope.itemsPerPage = 4;
        $scope.currentPage = 0;

        $scope.prevPage = function() {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };

        $scope.prevPageDisabled = function() {
            return $scope.currentPage === 0 ? "disabled" : "";
        };

        $scope.nextPage = function() {
            if ($scope.currentPage < $scope.pageCount() - 1) {
                $scope.currentPage++;
            }
            console.log('nextPage: ', $scope.currentPage);
        };

        $scope.nextPageDisabled = function() {
            return $scope.currentPage === $scope.pageCount() - 1 ? "disabled" : "";
        };

        $scope.pageCount = function() {
            return Math.ceil($scope.total / $scope.itemsPerPage);
        };

        $scope.setPage = function(n) {
            if (n > 0 && n < $scope.pageCount()) {
                $scope.currentPage = n;
            }
        };
        $scope.$watch("currentPage", function(newValue, oldValue) {
            $scope.users =
                    userDAO.getUsers(newValue * $scope.itemsPerPage, $scope.itemsPerPage);
            $scope.total = userDAO.total();
            //console.log('newValue: ', newValue, 'oldValue', oldValue);
        });
        
        /*testing
         * 
         */
        $scope.name = '';
        $scope.greeting =  function(row) {
            $scope.name = row;
        };
        
}]);



