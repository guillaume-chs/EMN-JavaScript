(function() {
    'use strict';

    angular.module('WhatsApp.services')
        .service('AuthSvr', AuthSvr);

    AuthSvr.$inject = ['$firebaseAuth', 'UsersSrv'];

    function AuthSvr($firebaseAuth, UsersSrv) {
        const auth = $firebaseAuth();

        this.signUp = (firstName, lastName, email, password) => {
            return auth.$createUserWithEmailAndPassword(email, password).then(user => {
                return UsersSrv.add(user.uid, firstName, lastName, email);
            });
        };

        this.signIn = (email, password) => auth.$signInWithEmailAndPassword(email, password);

        this.user = () => ({ uid: id, email: email } = auth.$getAuth()); // ES6 destructuring

        this.signOut = () => auth.$signOut();

        this.isConnected = () => auth.$requireAuth();
    };
})();