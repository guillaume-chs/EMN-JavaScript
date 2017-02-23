(function() {
    'use strict';

    angular.module('WhatsApp.services')
        .service('MessagesSrv', MessagesSrv);

    MessagesSrv.$inject = ['$firebaseArray', '$firebaseObject'];

    function MessagesSrv($firebaseArray, $firebaseObject) {
        const ref = firebase.database().ref();

        this.getMessagesFromChatId = chatId => $firebaseArray(ref.child('messages').child(chatId));

        this.add = (chatId, userId, sender, text) => $firebaseArray(ref.child('messages').child(message.chatId)).$add({
            chatId: chatId,
            senderId: userId,
            sender: sender,
            text: text,
            sendDate: new Date().toISOString()
        });
    };
})();