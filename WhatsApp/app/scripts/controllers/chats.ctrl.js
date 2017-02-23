(function() {
    'use strict';

    angular.module('WhatsApp.controllers')
        .controller('ChatsCtrl', ChatsCtrl);

    ChatsCtrl.$inject = ['$scope', '$ionicPopup', 'ChatsSrv'];

    function ChatsCtrl($scope, $ionicPopup, ChatsSrv) {
        $scope.chats = ChatsSrv.getChats();

        $scope.showCreateDialog = function() {
            $scope.data = {};

            // An elaborate, custom popup
            const myPopup = $ionicPopup.show({
                template: `
                <div class="list card">
                    <div class="item item-input">
                        <label for="chatName">
                            Nom :
                            <input id="chatName" type="text" ng-model="data.chatName" placeholder="Nom" name="chatName" class="item">
                        </label>
                    </div>
                    <div class="item item-input">
                        <label for="description">
                            Description :
                            <input id="description" type="text" ng-model="data.description" placeholder="Une petite phrase" name="description" class="item">
                        </label>
                    </div>
                </div>
                
                `,
                title: 'Nouvelle conversation',
                subTitle: 'What about "oopsy doopsy" ?',
                scope: $scope,
                buttons: [
                    { text: 'Annuler' },
                    {
                        text: '<b>Créer</b>',
                        type: 'button-positive',
                        onTap: (e) => (!$scope.data.chatName && !$scope.data.description) ? e.preventDefault() : $scope.data
                    }
                ]
            });
            myPopup.then(data => {
                ChatsSrv.createChat(data.chatName, data.description);
                $state.go('tab.chats');
            });
        };
    };
})();