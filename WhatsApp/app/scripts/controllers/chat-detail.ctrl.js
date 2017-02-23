(function() {
    'use strict';

    angular.module('WhatsApp.controllers')
        .controller('ChatDetailCtrl', ChatDetailCtrl);

    ChatDetailCtrl.$inject = ['$scope', '$state', '$stateParams', 'ContactsSrv', 'MessagesSrv', 'AuthSrv', 'moment'];

    function ChatDetailCtrl($scope, $state, $stateParams, ContactsSrv, MessagesSrv, AuthSrv, moment) {
        const user = AuthSrv.user();

        $scope.data = {
            message: ""
        };
        $scope.$on('$ionicView.enter', () => {
            $scope.messages = MessagesSrv.getMessagesFromChatId($stateParams.chatId);
        });
        $scope.sendMessage = () => {
            MessagesSrv.add($stateParams.chatId, $scope.user.id, $scope.user.name, $scope.data.message);
            $scope.data.message = "";
        }

        ContactsSrv.get(user.id).$loaded().then(contact => {
            $scope.user = {
                id: user.id,
                name: contact.firstName + " " + contact.lastName,
            }
        });
    };
})();