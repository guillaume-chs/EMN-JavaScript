  (function() {
      'use strict';

      angular.module('WhatsApp.controllers')
          .controller('SigninCtrl', SigninCtrl);

      SigninCtrl.$inject = ['$scope', '$state', '$ionicPopup', 'AuthSrv'];

      function SigninCtrl($scope, $state, $ionicPopup, AuthSrv) {
          $scope.data = {
              email: '',
              password: ''
          };

          $scope.signIn = () => AuthSrv.signIn($scope.data.email, $scope.data.password).then(
              () => $state.go('tab.contacts'),
              () => $ionicPopup.alert({
                  title: 'Impossible de vous connecter',
                  template: 'Login | Mot de passe incorrect'
              })
          );

          $scope.isFormValid = () => ($scope.data.email === '' || $scope.data.password === '');
      };
  })();