(function() {
    'use strict';

    angular.module('WhatsApp.services')
        .service('UsersSrv', UsersSrv);

    UsersSrv.$inject = ['$firebaseArray', '$firebaseObject'];

    function UsersSrv($firebaseArray, $firebaseObject) {
        const ref = firebase.database().ref();

        this.getUsers = () => $firebaseArray(ref.child('users'));

        this.getUser = id => $firebaseObject(ref.child('users').child(id));

        this.add = (uid, firstName, lastName, email) => {
            return ref.child('users').child(uid).set({
                firstName: firstName,
                lastName: lastName,
                email: email
            });
        }
    };
})();