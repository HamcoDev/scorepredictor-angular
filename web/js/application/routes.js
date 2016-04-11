app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'js/ng-templates/home.html',
        controller: 'homeController'
      }).
      when('/predictions/enter', {
        templateUrl: 'js/ng-templates/enter-predictions.html',
        controller: 'enterPredictionsController'
      }).
      when('/predictions/view', {
        templateUrl: 'js/ng-templates/view-predictions.html',
        controller: 'viewPredictionsController'
      }).
      when('/leagueTable', {
        templateUrl: 'js/ng-templates/league-table.html',
        controller: 'leagueTableController'
      }).
      when('/login', {
        templateUrl: 'js/ng-templates/login.html',
        controller: 'loginController'
      }).
      when('/registration', {
        templateUrl: 'js/ng-templates/registration.html',
        controller: 'registrationController'
      }).
      when('/admin', {
        templateUrl: 'js/ng-templates/admin.html',
        controller: 'adminController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);