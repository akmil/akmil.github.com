/**
 * Created by pasha on 11.07.2015.
 */
angular.module('main', ['ngAnimate', 'toaster'])

  .controller('myController', function($scope, toasterService, toasterEventRegistry, $timeout, $window) {
    $scope.text = '';
    $scope.toggleInboxBtn = {showInbox : false};
    

    $scope.inbox = toasterService.inbox;


    var type = {
      toastId: 'uid-999',
      type: 'info',
      title: 'A toast',
      body: "myTemplate.html",
      timeout: null,
      bodyOutputType: 'template',
      onHideCallback: toasterEventRegistry.callbackEvent.callbackFunc
    };

    $scope.pop = function() {
      $scope.text = type;

      toasterService.pop('toastId-777', type); //show
      console.log('process... adding to inbox');
      toasterService.addToInbox(type);  //add

      
      //toasterService._isDelete = false; <- this set in callbaxk

      //key in this toaster
      //console.log(toasterService);
      //for(key in toasterService){console.log(key);}
    };

    //@deprecated
    $scope.showAll = function (){
/*
      for(var i =0; i< toasterEventRegistry.allToastInbox.length;i++){
        var toastCurrent = toasterEventRegistry.allToastInbox[i];
        //console.log('allToastInbox: ', toastCurrent);
        console.log('id:', toastCurrent.id,  toastCurrent.title);

        //toaster.pop(toastId ,type, title, body, timeout, bodyOutputType, clickHandler, toasterId, showCloseButton, onHideCallback);

        toasterService.pop(toastCurrent.toastId, toastCurrent.type, toastCurrent.title, toastCurrent.body , toastCurrent.timeout, toastCurrent.bodyOutputType);

        //parse link
        toasterService.pop('success', "title", 'Its address is https://google.com.', 15000, 'trustedHtml', function(toasterService) {
          var match = toasterService.body.match(/http[s]?:\/\/[^\s]+/);
          if (match) $window.open(match[0]);
          return true;
        });
        toasterService.pop('warning', "Hi ", "{template: 'myTemplateWithData.html', data: 'MyData'}", 15000, 'templateWithData');

      }
      */
    };
/*
    $scope.goToLink = function(toaster) {
      console.log(toaster);
      var match = toaster.body.match(/http[s]?:\/\/[^\s]+/);
      if (match) $window.open(match[0]);
      return true;
    };
*/
    $scope.clear = function(){
      toasterService.clear();
    };

    $scope.showInboxMsg = function() {
      //console.log ('server toasts:', toasterEventRegistry.allToastInbox );
      //$scope.text = 'total number of notofication on server: ' + toasterEventRegistry.allToastInbox.length;

      //console.log('showed:', $scope.inbox);
      //render inbox toasts
      for(var i =0; i< $scope.inbox.length;i++) {
        var toastCurrent = $scope.inbox[i];
        console.log('showed:', toastCurrent);
        toasterService.pop(toastCurrent.toastId, toastCurrent.type, toastCurrent.title, toastCurrent.body, toastCurrent.timeout, toastCurrent.bodyOutputType);
      }
        return toasterEventRegistry.allToastInbox;
    };

    $scope.showById = function(id) {
      //var toastCurrent = $scope.inbox[id];
      var current = toasterEventRegistry.getByIdToasts(id);
      //$scope.text = current;
      toasterService.addToInbox(current);
      //@declaration: toaster.pop(toastId ,type, title, body, timeout, bodyOutputType, clickHandler, toasterId, showCloseButton, onHideCallback);
      //toasterService.pop( current.id , current.type, current.title , current.body, current.timeout, current.bodyOutputType, current.clickHandler, current.toasterId, current.showCloseButton, current.onHideCallback);

      console.log ( 'hidden:', current );
      //if type is object
      toasterService.pop( 'id-current'+id , current );
      //console.log ( type );
      //return current;
    };
    $scope.removeThis = function() {
      toasterService.removeThisToast();
    };
    $scope.removeById = function(id) {
      toasterService.removeById(id);
    };
    $scope.alertMy=function(txt){
      $timeout(function() {
        window.alert(txt);
      })
    };

    $scope.readed=function(txt){
      console.log(txt + ' pressed' );
      toasterService._isReaded = true;
    };
    $scope.save=function(txt){$scope.alertMy(txt)};
    $scope.delete=function(txt){$scope.alertMy(txt)};
  });