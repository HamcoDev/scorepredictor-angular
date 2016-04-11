app.controller("homeController", homeController);

homeController.$inject = [
  "$scope"
];

function homeController(
  $scope
  ) {
  //dataService.checkUserAuthenticated();
  $scope.message = 'home page!';
};