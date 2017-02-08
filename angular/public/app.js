(function() {
    'use strict';

    angular.module('ContactApp', [
        'ngRoute',
        'ContactApp.routes',
        'ContactApp.controllers',
        'ContactApp.services'
    ]);

})();



function getHttp(requete, success, error) {
    success();
}