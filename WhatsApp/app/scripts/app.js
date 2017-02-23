// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('WhatsApp', ['ionic', 'WhatsApp.controllers', 'WhatsApp.services', 'angularMoment', 'firebase'])

.run($ionicPlatform => $ionicPlatform.ready(() => {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
    }
}))


.run(["$rootScope", "$state", ($rootScope, $state) =>
    $rootScope.$on("$stateChangeError", (event, toState, toParams, fromState, fromParams, error) => {
        if (error === "AUTH_REQUIRED") {
            $state.go('signin');
        }
    })
])


.config(($stateProvider, $urlRouterProvider) => {
    // Abstract state for the tabs directive
    $stateProvider.state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        resolve: {
            currentAuth: AuthSrv => AuthSrv.isConnected()
        }
    }).state('tab.contacts', {
        url: '/contacts',
        views: {
            'tab-contacts': {
                templateUrl: 'templates/tab-contacts.html',
                controller: 'ContactsCtrl'
            }
        }
    }).state('tab.chats', {
        url: '/chats',
        views: {
            'tab-chats': {
                templateUrl: 'templates/tab-chats.html',
                controller: 'ChatsCtrl'
            }
        }
    }).state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
            'tab-chats': {
                templateUrl: 'templates/tab-chat-detail.html',
                controller: 'ChatDetailCtrl'
            }
        }
    }).state('tab.settings', {
        url: '/settings',
        views: {
            'tab-settings': {
                templateUrl: 'templates/tab-settings.html',
                controller: 'SettingsCtrl'
            }
        }
    }).state('signin', {
        url: '/signin',
        templateUrl: 'templates/signin.html',
        controller: 'SigninCtrl'
    }).state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'SignupCtrl'
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/signin');
})


// filters
.filter('nl2br', ['$filter', $filter =>
    (data => (!data) ? data : data.replace(/\n\r?/g, '<br />'))
]);


// register controllers & services
angular.module('WhatsApp.controllers', []);
angular.module('WhatsApp.services', []);