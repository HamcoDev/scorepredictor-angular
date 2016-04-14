app.controller("homeController", homeController);

homeController.$inject = [
  "$scope",
  "dataService"
];

function homeController(
  $scope,
  dataService
  ) {
  //dataService.checkUserAuthenticated();
};