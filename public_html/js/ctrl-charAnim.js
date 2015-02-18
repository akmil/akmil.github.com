'use strict';

appNameMy.controller('charAnimCtrl', function($scope, nameFactory) {
    // Set of Photos
    $scope.layer01 = nameFactory.getArmor_layer01();  
}
);

