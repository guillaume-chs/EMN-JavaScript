(function() {
    'use strict';

    angular.module('ContactApp.services', [])
        .service('ContactsSrv', ContactsSrv);

    ContactsSrv.$inject = ['$http', '$log', '$q', '$timeout'];

    function ContactsSrv($http, $log, $q, $timeout) {
        let contacts = null;

        function loadContacts() {
            const deferred = $q.defer();
            if (!contacts) {
                return $timeout(() => {
                    return $http.get('/data/contacts.json').then(response => {
                        contacts = response.data;
                        deferred.resolve(contacts);
                    }, (error) => {
                        $log.error(error);
                        deferred.reject(error);
                    });
                }, 2000);
            } else {
                return $q.resolve(contacts);
            }
        };

        this.getContacts = () => loadContacts();

        this.getContact = (id) => loadContacts().then(cs => cs.find(c => c._id === id));

        this.saveContact = (contact) => loadContacts().then(cs => {
            contact._id = String(cs.length);
            cs.push(contact);
        });

        this.deleteContact = (id) => loadContacts().then(cs => cs.splice(contacts.findIndex(c => c._id === id), 1));
    }
})();