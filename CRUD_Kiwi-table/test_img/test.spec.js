describe('tableCtrl', function(){
  var scope, ctrl;
    beforeEach(
            module('APP'), 
            module('tableCtrl')
            
        );
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    console.log(module(tableCtrl));
    ctrl = $controller(tableCtrl, { $scope: scope });
  }));

  it('should change greeting value if name value is changed', function() {
    scope.name = "Frederik";
    scope.$digest();
    expect(scope.greeting).toBe("Frederik");
  });
});

describe('notification describe',function() {
    beforeEach(function() {
  //      browser().navigateTo('/');
    });
beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope;
    element = $compile('<div class="notification">' + 
                '<div class="notification-content">' +
                    '<p>{{ message }}</p>' + 
                '</div>' + '</div>')(scope);
    scope.$digest();
  }));
  
it("should set the correct CSS class", function () {
    expect(element.hasClass('notification')).toBe(true);
    //done
  });
  
  it("should transclude the body text", function () {
      console.log('the body text',scope);
    expect(element.find('div').text()).toBe('');
  });
  
    it('should have the welcome message',function() {
        expect(element.html()).toContain('class="ng-binding"');
    });
    
    it('should write the bound name to the log', inject(function($controller, $log) {
        var ctrl = $controller('tableCtrl', { /* no locals */}, {message: 'Clark Kent'});
        expect(ctrl.message).toEqual('Clark Kent');
        //expect($log.info.logs).toEqual(['Clark Kent']);
    }));
    
  
});

describe("modalDialog describe", function () {
  //var scope, element;

  //beforeEach(module('modal-dialog'));
             
  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope;
    element = $compile("<div class='ng-modal'>"+
    "<div class='ng-modal ' ng-if='show'>"+
       " <div class='ng-modal-overlay ' ng-click='hideModal()'>"+
        "</div>"+
        "<div class='ng-modal-dialog' ng-style='dialogStyle'>"+
           
           " <div class='modal-header'>"+
            "    <button class='close' aria-label='Close' data-dismiss='modal' <span aria-hidden='true'>x</span> </button>"+
               " <h4 id='gridModalLabel' class='modal-title'>Create User"+
                    "<a class='anchorjs-link' href='#gridModalLabel'></a></h4></div>"+
            "<div class='ng-modal-dialog-content' ><!-- ng-transclude off-->"+
                "<div class=' form-group modal-body '>"+
                    "<ng-form class='form-horizontal' name='signup_form'ng-controller='tableCtrl'  novalidate>"+
                        "<div ng-repeat='field in fields' ng-form='signup_form_input'class='form-group'>"+
                            "<label class='control-label'> {{field.placeholder}}"+
                            "<input class='input-lg'type='{{field.type}}'name='dynamic_input'maxlength='10'ng-required='field.isRequired'ng-model='field.inputValue'placeholder='{{field.placeholder}}' /></label>"+
                            "<div ng-show='signup_form_input.dynamic_input.$dirty && signup_form_input.dynamic_input.$invalid'><span class='error' ng-show='signup_form_input.dynamic_input.$error.required'>The field is required.</span></div>"+
                        "</div>"+                        
                        "<button type='submit' class='btn btn-success' ng-disabled='signup_form.$invalid' ng-click='submitForm(fields[0].inputValue,fields[1].inputValue,fields[2].inputValue);hideModal();'>Add user and close modal window</button>"+
                    "</ng-form></div></div></div></div>")(scope);
    scope.$digest();
  }));

  it("should set the correct CSS class", function () {
    expect(element.hasClass('ng-modal')).toBe(true);
  });
//  it("should transclude the body text", function () {
//      //console.log('the body text',scope);
//    expect(element.find('div').text()).toBe('Some Message');
//  });
//  it("should fire callback when closed", function () {
//    scope.closeHandler = jasmine.createSpy();
//    //console.log('closeHandler',scope);
//    element.find('button')[0].click();
//    expect(scope.closeHandler).toHaveBeenCalled();
//  });
  
});






/*
describe('tableCtrl', function() {
    var $scope={}, rScope;

    beforeEach(
            module('APP'), 
            module('tableCtrl'), 
              console.log(module('tableCtrl'))
        );

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      rScope = $rootScope;
      $controller('tableCtrl', {$scope: $scope});
      console.log($controller);
    }));

    it('should create "spices" model with 3 spices', function() {
        console.log($scope);
      expect($scope.template.length).toBe(3);
    });

    it('should set the default value of spice', function() {
      expect($scope.template).toBe('habanero');
    });
    
  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('tableCtrl', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });
  });
});
*/