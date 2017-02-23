(function() {
    'use strict';

    angular.module('WhatsApp.services')
        .service('ContactsSrv', ContactsSrv);

    ContactsSrv.$inject = ['$firebaseArray', '$firebaseObject'];

    function ContactsSrv($firebaseArray, $firebaseObject) {
        const ref = firebase.database().ref();

        this.all = () => $firebaseArray(ref.child('users'));

        this.get = id = $firebaseObject(ref.child('users').child(id));

        this.remove = id => this.get(id).$remove();
    };
})();