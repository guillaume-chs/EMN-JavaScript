(function() {
    'use strict';

    angular.module('WhatsApp.services')
        .service('ChatsSrv', ChatsSrv);

    ChatsSrv.$inject = ['$firebaseArray', 'firebaseObject'];

    function ChatsSrv($firebaseArray, $firebaseObject) {
        const ref = firebase.database().ref();

        this.all = () => $firebaseArray(ref.child('chats'));

        this.add = (chatName, chatDescription) => {
            return $firebaseArray(ref.child('chats')).$add({
                name: chatName,
                description: chatDescription,
                creationDate: new Date().toISOString()
            });
        };

        this.get = id => $firebaseArray(ref.child('chats').child(id));

        this.remove = id => this.get(id).$remove();
    };
})();