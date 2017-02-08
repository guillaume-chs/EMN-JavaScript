(function() {
    'use strict';

    angular.module('ContactApp.routes', [])
        .config(['$routeProvider', ($routeProvider) => {
            $routeProvider
                .when('/', {
                    templateUrl: '/partials/home.html'
                })
                .when('/contacts', {
                    templateUrl: '/partials/contacts.html',
                    controller: 'ContactsCtrl'
                })
                .when('/contacts/edit/:contactId', {
                    templateUrl: '/partials/contact-edit.html',
                    controller: 'EditContactCtrl'
                })
                .when('/contacts/new', {
                    templateUrl: '/partials/contact-edit.html',
                    controller: 'EditContactCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})();