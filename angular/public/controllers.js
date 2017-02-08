(function() {
    'use strict';

    angular.module('ContactApp.controllers', [])
        .controller('ContactsCtrl', ContactsCtrl)
        .controller('EditContactCtrl', EditContactCtrl);


    ContactsCtrl.$inject = ['$scope', 'ContactsSrv', '$rootScope'];

    function ContactsCtrl($scope, ContactsSrv, $rootScope) {
        $rootScope.loading = true;
        ContactsSrv.getContacts().then(contacts => {
            $scope.contacts = contacts;
            $rootScope.loading = false;
        });
        $scope.deleteContact = ContactsSrv.deleteContact;
    };


    EditContactCtrl.$inject = ['$scope', '$routeParams', 'ContactsSrv', '$location'];

    function EditContactCtrl($scope, $routeParams, ContactsSrv, $location) {
        if (!!$routeParams.contactId) {
            ContactsSrv.getContact($routeParams.contactId).then(contact => {
                $scope.contact = contact;
            });
            $scope.creationMode = false;
        } else {
            $scope.creationMode = true;
        }
        $scope.createContact = (contact) => {
            ContactsSrv.saveContact(contact).then(() => {
                $location.path('contacts');
            });
        }
    }
})();