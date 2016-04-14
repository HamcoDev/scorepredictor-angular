app.directive('ngFixture', function() {
  return {
    restrict: 'A',
    require: '^ngModel',
    scope: {
      ngModel: '='
    },
    templateUrl: './js/ng-templates/fixture.html'
    //template: '<div class="fixture">Hello World!</div>'
  }
});