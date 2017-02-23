(function() {
    'use strict';

    angular.module('WhatsApp.controllers')
        .controller('SettingsCtrl', SettingsCtrl);

    SettingsCtrl.$inject = ['$scope', '$state', '$ionicHistory', 'AuthSrv', 'UsersSrv'];

    function SettingsCtrl($scope, $state, $ionicHistory, AuthSrv, UsersSrv) {
        const user = AuthSrv.user();

        UsersSrv.get(user.id).$loaded().then(user => {
            $scope.user = ({ firstName, lastName, email } = user); // ES6 destructuring
        });

        $scope.signout = () => AuthSrv.signOut().then(() => {
            $ionicHistory.clearCache();
            $ionicHistory.clearHistory();
            $state.go('signin');
        });
    };
})();