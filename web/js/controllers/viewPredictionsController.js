app.controller("viewPredictionsController", viewPredictionsController);

viewPredictionsController.$inject = [
    "$scope",
    "$http",
    "$q",
    "dataService"
];

function viewPredictionsController(
    $scope,
    $http,
    $q,
    dataService
) {


$http({method: 'GET', url: '/viewFixtures'})
    .success(function(data) {
        $scope.fixtureList = data; 
    });



    //   dataService.currentMatchday()
    //     .then(function (currentMatchday) {
    //       $http({
    //         headers: { 'X-Auth-Token': 'b435bb252dad4a63ab0ab09b10314773' },
    //         method: 'GET',
    //         url: 'http://api.football-data.org/alpha/soccerseasons/398/fixtures/?matchday='.concat(currentMatchday)
    //       }).then(function successCallback(response) {
    //         $scope.fixtureList = response.data;
    //       }, function errorCallback(response) {
    //       });

    //   dataService.checkUserAuthenticated();

    //   var userPredictions = new Firebase('https://ionic-scores.firebaseio.com/scores/user/'.concat(dataService.authenticatedUser.uid));
    //   //var userPredictions = new Firebase('https://ionic-scores.firebaseio.com/scores/user/'.concat(authenticatedUser.uid).concat('/matchday/10'));
    //   userPredictions.on("value", function (snapshot) {
    //     $scope.predictions = snapshot.val();
    //   });

    //   $scope.matchdayChanged = function () {
    //     var userPredictions = new Firebase('https://ionic-scores.firebaseio.com/scores/user/'.concat(dataService.authenticatedUser.uid).concat('/matchday/'.concat($scope.selectedMatchday)));
    //     userPredictions.on("value", function (snapshot) {
    //       $scope.predictions = snapshot.val();
    //     });
    //   }
};