app.controller("enterPredictionsController", enterPredictionsController);

enterPredictionsController.$inject = [
    "$scope",
    "$http",
    "dataService"
];

function enterPredictionsController(
    $scope,
    $http,
    dataService
) {
    //   dataService.checkUserAuthenticated();
    
    $scope.fixtureNo = 0;
    var weekFixtures;      
    
    dataService.retrieveFixtures()
        .then(function(fixtures) {
            weekFixtures = fixtures;
            $scope.fixture = weekFixtures[$scope.fixtureNo];
            $scope.noOfGames = weekFixtures.length - 1;            
        });
      
    $scope.nextFixture = function() {
        $scope.fixtureNo += 1;
        $scope.fixture = weekFixtures[$scope.fixtureNo];
    };
    
    $scope.prevFixture = function() {
        $scope.fixtureNo -= 1;
        $scope.fixture = weekFixtures[$scope.fixtureNo];
    };
    
    
        
        
    //       $scope.submit = function () {
    //         var user = dataService.ref.child("scores/user");
    //         var userRef = user.child(dataService.authenticatedUser.uid)

    //         var matchday = userRef.child("matchday");
    //         var matchdayRef = matchday.child(currentMatchday);

    //         var fixture = matchdayRef.child("fixture");

    //         var predictions = [];

    //         $scope.fixtureList.fixtures.forEach(function (fixture) {

    //           predictions.push({
    //             homeTeam: fixture.homeTeamName,
    //             homePrediction: fixture.homePrediction == null ? 0 : fixture.homePrediction,
    //             awayTeam: fixture.awayTeamName,
    //             awayPrediction: fixture.awayPrediction == null ? 0 : fixture.awayPrediction,
    //             date: fixture.date,
    //             status: fixture.status
    //           });
    //         });
    //         fixture.set(predictions);
    //       }
    //     });

    // getCurrentMatchday()
    //     .then(function(currentMatchday) {
    //         $http({
    //             //headers: { 'X-Auth-Token': 'b435bb252dad4a63ab0ab09b10314773' },
    //             method: 'GET',
    //             url: '/viewFixtures'
    //         }).then(function successCallback(response) {
    //             $scope.fixtureList = response.data;
    //         }, function errorCallback(response) {
    //         });
    //     });

    // function getCurrentMatchday() {
    //     return 29;
    // };



    //       $scope.submit = function () {
    //         var user = dataService.ref.child("scores/user");
    //         var userRef = user.child(dataService.authenticatedUser.uid)

    //         var matchday = userRef.child("matchday");
    //         var matchdayRef = matchday.child(currentMatchday);

    //         var fixture = matchdayRef.child("fixture");

    //         var predictions = [];

    //         $scope.fixtureList.fixtures.forEach(function (fixture) {

    //           predictions.push({
    //             homeTeam: fixture.homeTeamName,
    //             homePrediction: fixture.homePrediction == null ? 0 : fixture.homePrediction,
    //             awayTeam: fixture.awayTeamName,
    //             awayPrediction: fixture.awayPrediction == null ? 0 : fixture.awayPrediction,
    //             date: fixture.date,
    //             status: fixture.status
    //           });
    //         });
    //         fixture.set(predictions);
    //       }
    //     });

    //   $scope.matchdayChanged = function () {
    //     $http({
    //       headers: { 'X-Auth-Token': 'b435bb252dad4a63ab0ab09b10314773' },
    //       method: 'GET',
    //       url: 'http://api.football-data.org/alpha/soccerseasons/398/fixtures/?matchday='.concat($scope.selectedMatchday)
    //     }).then(function successCallback(response) {
    //       $scope.fixtureList = response.data;
    //     }, function errorCallback(response) {
    //     });
    //   }
};