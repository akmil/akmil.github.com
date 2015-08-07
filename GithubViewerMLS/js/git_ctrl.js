gitApp.factory('paginationSrv', function($stateParams) {

  var paginationSrv = {
    numberPagination: 0,
    next: function (val) {
      this.numberPagination = this.numberPagination + val;
      console.log('next ',this.numberPagination);
      return '?since='+ this.numberPagination;
    }
  };
  return paginationSrv;
});

gitApp.controller("configCtrl", function ($scope , $state ,$stateParams ){
  //$scope.goBack = function () {
  //$state.go('^', $stateParams);
  //};
  //$scope.user_url = "https://api.github.com/users";
  //console.log('$scope.state =', $state.current);
});

gitApp.controller("listCtrl",    function ($scope, resolveList, paginationSrv){
  $scope.contacts = resolveList.data;

  $scope.sinceNext =  paginationSrv.next(22);
});


gitApp.controller('aboutCtrl',function($scope, $state, $stateParams , resolveUser, resolveRepos){
  //console.log('resolveUser' ,resolveUser);
  $scope.person = resolveUser.data;
  $scope.repos = resolveRepos.data;
  //console.log('data $scope.repos',$scope.repos);
  $scope.reposFound = resolveRepos.data.length > 0;

  $scope.goBack = function () {
    $state.go('base.list', $stateParams);
  };
});

gitApp.controller('reposCtrl',function($scope, $state, $stateParams, resolveReposDetail , resolveBranchesList , resolveCommits){

  //console.info('set user_url' , $scope.user_url);

  $scope.reposDetailList = resolveReposDetail.data;
  $scope.branches = resolveBranchesList.data;
  $scope.commits = resolveCommits.data;

  $scope.goBack = function () {
    //console.log('go base.about');
    $state.go('base.about', $stateParams);
  };

});