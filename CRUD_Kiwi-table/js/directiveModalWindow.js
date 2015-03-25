APP.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, 
    transclude: true, 
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      //console.log('scope.dialogStyle', scope.dialogStyle);
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {          
        scope.show = false ;       
//        console.log('scope.show is', scope.show);
      };
    },
    templateUrl: 'modalUserCreate.html'
  };
});


APP.directive('notification', function($timeout) {
    var html = '<div class="notification">' + 
                '<div class="notification-content">' +
                    '<p>{{ message }}</p>' + 
                '</div>' + '</div>';
    return{restrict: 'E',
        scope: {message: '='},
        template: html, 
//        transclude: true,
        replace: true,
        link: function(scope, ele, attrs) {
            scope.$watch('message', function() {
                ele.removeClass('ng-hide');
                    $timeout(function() {
                        ele.addClass('ng-hide');
                    }, 2000);
            });
        }
    };
});

//APP.directive('editable', function() {
//    return {
//        restrict: 'E',
//        scope: {model: '='},
//        replace: false,
//        templateUrl:
//                '<span>' +
//                '<input type="text" ng-model="model" ng-show="edit" ng-enter="edit=false"></input>' +
//                '<span ng-show="!edit" style="text-decoration:underline">{{model}}</span>' +
//                '</span>',
//        link: function(scope, element, attrs) {
//            scope.edit = false;
//            element.bind('click', function() {
//                scope.$apply(scope.edit = true);
//                element.find('input').focus();
//            });
//        }
//    };
//});

