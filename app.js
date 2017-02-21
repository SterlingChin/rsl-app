angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

$stateProvider
    .state('home',{
        url: '/',
        templateUrl:'./views/home.html',
        controller: 'mainCtrl',
    })
    .state('players',{
        url: '/player',
        templateUrl:'./views/players.html',
        controller: 'mainCtrl',
    })
    .state('season', {
        url:'/season/:id',
        templateUrl: './views/season.html',
        controller: 'mainCtrl',
    })
    .state('lifetime', {
        url:'/lifetime',
        templateUrl: './views/lifetime.html',
        controller: 'mainCtrl',
    })

$urlRouterProvider.otherwise('/');

});