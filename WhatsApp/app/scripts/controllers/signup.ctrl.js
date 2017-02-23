(function() {
    'use strict';

    angular.module('WhatsApp.controllers')
        .controller('SignupCtrl', SignupCtrl);

    SignupCtrl.$inject = ['$scope', '$state', '$ionicPopup', 'UsersSrv', 'AuthSrv'];

    function SignupCtrl($scope, $state, $ionicPopup, UsersSrv, AuthSrv) {
        $scope.data = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        $scope.signUp = () => AuthSrv.signUp($scope.data.firstName, $scope.data.lastName, $scope.data.email, $scope.input.password).then(
            () => $state.go('tab.contacts'),
            () => $ionicPopup.alert({
                title: 'Impossible de créer le compte',
                template: 'Un compte existe déjà pour cette adresse mail'
            })
        );

        $scope.isFormValid = () => ($scope.data.firstName === '' || $scope.data.lastName === '' || $scope.data.email === '' || $scope.data.password === '');
    }
})();