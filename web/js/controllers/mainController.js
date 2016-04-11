app.controller("mainController", mainController);

mainController.$inject = [
  "$scope"
];

function mainController(
    $scope
  ) {
  //dataService.checkUserAuthenticated();
  $scope.message = 'beans';
};