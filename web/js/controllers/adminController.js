app.controller("adminController", adminController);

adminController.$inject = [
  "$scope",
  "dataService"
];

function adminController(
    $scope,
    dataService
  ) {
  //dataService.checkUserAuthenticated();
  //$scope.response = '';
  $scope.updateFixtures = function() {
    dataService.updateFixtures()
        .then(function(response) {
            $scope.response = (response.status === 201) ? 'Successfully updated fixtures database':'Unable to update fixtures at this time';
        });   
  }
  
};