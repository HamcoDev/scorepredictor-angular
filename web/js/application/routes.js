app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    "use strict";

    // $stateProvider.state("menu", {
    //     templateUrl: "ng-templates/menu.html",
    //     controller: "menuController"
    // });

    $stateProvider.state("login", {
        url: "/login",
        templateUrl: "ng-templates/login.html",
        controller: "loginController"
    });

    $stateProvider.state("predictions/enter", {
        url: "/predictions/enter",
        views: {
            'menuContent': {
                templateUrl: "ng-templates/enter-predictions.html",
                controller: "enterPredictionsController"
            }
        }
    });

    $stateProvider.state("predictions/view", {
        url: "/predictions/view",
        views: {
            'menuContent': {
                templateUrl: "ng-templates/view-predictions.html",
                controller: "viewPredictionsController"
            }
        }
    });

    $stateProvider.state("leagueTable", {
        url: "/leagueTable",
        views: {
            'menuContent': {
                templateUrl: "ng-templates/league-table.html",
                controller: "leagueTableController"
            }
        }
    });

    $stateProvider.state("registration", {
        url: "/registration",
        templateUrl: "ng-templates/registration.html",
        controller: "registrationController"
    });

    $stateProvider.state("home", {
        url: "/home",
        views: {
            'menuContent': {
                templateUrl: "ng-templates/home.html",
                controller: "homeController"
            }
        }
    });

    $urlRouterProvider.otherwise("/home");

}]);