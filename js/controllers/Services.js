var services = angular.module('Services',[
    'ngResource',
    'LocalStorageModule'
]);

services.config(function ( $httpProvider) {
    var auth = window.auth || {};

    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.defaults.headers.common['Authorization'] = 'Basic OjAwMDA=';
    $httpProvider.defaults.useXDomain = true;
});

services.factory('SettingSrv', ['localStorageService', function(localStorageService){
    return {
        /**
         * @returns {ConnectionSettings}
         */
        grab: function () {
            var config = localStorageService.get(ConnectionSettings.INDEX);

            if(!config){
                console.warn(ConnectionSettings.INDEX + ' is empty');
            }

            return new ConnectionSettings(config || {});
        },
        save: function (config) {
            localStorageService.set(ConnectionSettings.INDEX, JSON.stringify(new ConnectionSettings(config)));
        }
    };
}]);

services.factory('Vlc', ['$http', function($http){
<<<<<<< HEAD
    var linkHelper = require('./../components/Uri.js'),
        linker = new linkHelper();
=======

    var linker = new Uri();
>>>>>>> parent of 52aed7b... start using gulp

    return {
        status: function(){
            return $http({
                method: 'get',
                url: linker.command
            });
        },

        playlist: function(){
            return $http({
                method: 'get',
                url: linker.base + '/'+linker.decorateWithFormat('playlist')
            });
        },
        play: function(id){
            return $http({
                method: 'get',
                url: linker.command,
                params: {
                    command: 'pl_play',
                    id: id
                }
            });
        },
        stop: function(){
            return $http({
                method: 'get',
                url: linker.command,
                params: {
                    command: 'pl_stop'
                }
            });
        },
        next: function(){
            return $http({
                method: 'get',
                url: linker.command,
                params: {
                    command: 'pl_next'
                }
            });
        },
        previous: function(){
            return $http({
                method: 'get',
                url: linker.command,
                params: {
                    command: 'pl_previous'
                }
            });
        }
    };
}]);