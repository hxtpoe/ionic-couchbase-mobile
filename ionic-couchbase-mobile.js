'use strict';

angular.module('ionicCouchbaseMobile', ['ui.router'])
  .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }])
;

'use strict';

angular.module('ionicCouchbaseMobile')
  .controller('MainCtrl', ["$scope", function ($scope) {
  }]);

'use strict';

angular.module('ionicCouchbaseMobile')
    .provider('DbService', function () {
        this.$get = function() {}
    });
'use strict';

angular.module('ionicCouchbaseMobile')
    .provider('DbService2', function () {
        this.$get = function() {}
    });