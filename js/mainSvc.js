angular.module('app').service('mainSvc', function($http){
    this.test1 = 'service is working'

    this.rslHistoryData = function(){
        console.log($http.get('./data/mlsData.json'))
        return $http.get('./data/mlsData.json')
    }

    this.currentPlayers = function(){
        return $http.get('./data/currentPlayers.json')
    }

    this.rslWiki = function(){
        return $http ({
            method: 'GET',
            url: 'https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Real+Salt+Lake&export',
            // url: 'https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Real+Salt+Lake&export&exportnowrap&section19',
        }).then(function(response){
            // console.log(response.data)
            return response
        })
    }
})