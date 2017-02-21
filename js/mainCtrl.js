angular.module('app').controller('mainCtrl', function ($scope, mainSvc) {
  $scope.test = 'controller is working';

  mainSvc.rslHistoryData().then(function (mlsData) {
    var mlsStats = mlsData.data;
    var history = [];
    for (var i = 0; i < mlsStats.length; i++) {
      for (var key in mlsStats[i]) {
        if (mlsStats[i][key] === "Real Salt Lake") {
          history.push(mlsStats[i])
        }
      }
    }
      $scope.history = history
      console.log($scope.history)
  })

  mainSvc.currentPlayers().then(function (currentPlayers) {
    $scope.currentPlayers = currentPlayers.data;
    console.log($scope.currentPlayers)
  })
  mainSvc.rslWiki().then(function (rslWiki) {
    $scope.rslWiki = rslWiki
    // console.log($scope.rslWiki)
  })

  // ---------------------------------
  //|            type                 |
  // ---------------------------------

  var app = document.getElementById('homeType');

  var typewriter = new Typewriter(app, {
    loop: true
  });

  typewriter.typeString('Player')
    .pauseFor(3000)
    .deleteAll()
    .pauseFor(1500)
    .typeString('Season')
    .pauseFor(3000)
    .deleteAll()
    .pauseFor(1500)
    .typeString('Lifetime')
    .pauseFor(3000)
    .deleteAll()
    .pauseFor(1500)
    .start();
})
