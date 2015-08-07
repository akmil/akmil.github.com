'use strict';

var gitApp = angular.module('gitApp', ["ui.router", "ngAnimate" ]);
gitApp.config(function($stateProvider, $urlRouterProvider ){
  $stateProvider
    .state('base', {
      abstract: true,
      url: '/base',
      templateUrl: 'templates/base.html',
      resolve: { baseUrl: function() {return 'https://api.github.com' } },
      controller: 'configCtrl'
      //onEnter: function(){
      //  console.log("enter contacts");
      //}
    })
    .state("base.list", {
      url: "/list{since}",
      templateUrl: 'templates/list.html',
      resolve:{
        resolveList: function($http, baseUrl , $stateParams ){
          return $http.get(baseUrl +'/users' + $stateParams.since)
            .error(  function (data,status) {
            console.error('list.errror: ',status);
          });
        }
      },
      controller: 'listCtrl'
    })
    .state('base.about', {
      url: '/{login}',
      // loaded into ui-view of parent's template
      templateUrl: 'templates/about.html',
      resolve:{
        resolveUser: function($http, $stateParams, baseUrl){
          return $http.get(baseUrl + '/users/' + $stateParams.login);
          //  .success(function (data) {
          //   //console.log('data repos',data.public_repos);
          //});
        },
        resolveRepos: function($http, $stateParams, baseUrl){
          return $http.get(baseUrl + '/users/'+ $stateParams.login + '/repos');
            //.success(function (data) {
            //  console.log('data repos',data.public_repos);
            //});
        }
      },
      controller: 'aboutCtrl'
    })
    .state("base.repositories", {
      url: "/repos/{login}/{repositories}",
      templateUrl: 'templates/repositories.html',
      resolve:{
        resolveReposDetail: function($http, $stateParams , baseUrl ){
          console.log('$stateParams: ',$stateParams);
          return $http.get(baseUrl +'/repos/'+ $stateParams.login +'/' +$stateParams.repositories)
            .success(function (data) {});
        },
        resolveCommits: function($http, $stateParams, baseUrl) {
          return $http.get(baseUrl + '/repos/' + $stateParams.login + '/' + $stateParams.repositories + '/commits')
            .success(function (data) {
              console.log('promCommit', data)
            });
        },
        resolveBranchesList: function($http, $stateParams, baseUrl) {
          //console.log('branches start resolve');
          return  $http.get(baseUrl +'/repos/'+ $stateParams.login +'/' +$stateParams.repositories +'/branches')
                .success(function (data,status) {
                    //console.log('branches.data: ',data ,status);
                  })
                  .error(  function (data,status) {
                    console.log('branches.errror: ',data ,status);
                  });
        }
      },
      controller: 'reposCtrl'
    });

  $urlRouterProvider.when("", "/base/list");
  $urlRouterProvider.when("/", "/base/list");

  $urlRouterProvider.otherwise("/base/list");
});