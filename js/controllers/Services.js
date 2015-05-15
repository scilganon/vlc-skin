var services = angular.module('Services',[
    'ngResource'
]);

services.config(function ( $httpProvider) {
    var auth = window.auth || {};

    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.defaults.headers.common['Authorization'] = 'Basic OjAwMDA=';
    $httpProvider.defaults.useXDomain = true;
});

services.factory('Vlc', ['$http', function($http){

    var linker = new Uri();

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