'use strict';

angular.module('ionicCouchbaseMobile')
    .provider('DbService', function () {
        this.$get = function() {
            console.log('provider on board!!!');
        }
    });