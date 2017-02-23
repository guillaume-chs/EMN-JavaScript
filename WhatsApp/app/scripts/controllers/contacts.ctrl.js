(function() {
    'use strict';

    angular.module('WhatsApp.controllers')
        .controller('ContactsCtrl', ContactsCtrl);

    ContactsCtrl.$inject = ['$scope', 'ContactsSrv'];

    function ContactsCtrl($scope, ContactsSrv) {
        $scope.contacts = ContactsSrv.all();
    };
})();