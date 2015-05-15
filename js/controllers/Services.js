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
        playlist: function(){
            return $http.get([linker.base,linker.decorateWithFormat('playlist')].join('/'), {
                headers: {
                    'Authorization': 'Basic OjAwMDA='
                }
            });
        },
        play: function(id){
            return $http
                .get([linker.command, '?', 'command=pl_play', '&', 'id=', id].join(''));
        },
        stop: function(){
            return $http
                .get([linker.command, '?', 'command=pl_stop'].join(''));
        }
    };
}]);