var app = angular.module('myApp',['ionic','myApp.controller']);

app.config(function($stateProvider,$ionicConfigProvider,$urlRouterProvider){
  $stateProvider
      .state('home',{
          url:'/home',
          templateUrl:'../../home.html'
      })
  .state('tabs',{
      url:'/tab',
      abstract:true,
      templateUrl:'../../_tabs.html'
  })
      .state('tabs.tab1',{
          url:'/tab1',
          views:{
              'tab1a':{
                  templateUrl:'../../tab1.html',
                  controller:'tab1Control'
              }
          }

      })
      .state('tabs.tab2',{
          url:'/tab2',
          views:{
              'tab2b':{
                  templateUrl:'../../tab2.html',
                  controller:'tab2Control'
              }
          }

      })
      .state('tabs.tab3',{
          url:'/tab3',
          views:{
              'tab3c':{
                  templateUrl:'../../tab3.html',
                  controller:'tab3Control'
              }
          }

      })
      .state('tabs.content',{
          url:'/content/:count',
          views:{
              'tab2b':{
                  templateUrl:'../../content.html',
                  controller:'tabcontent'
              }
          }

      });

  $urlRouterProvider.otherwise('/tab/tab2');

  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.tabs.style("standard");


});

app.controller('fc',function($scope,$state){

      
});



