var app = angular.module('app', [
    'Services',
    'Directives',
    'ui.bootstrap'
]);

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('myApp')
        .setStorageType('localStorage');
});

app.controller('ControlsCtrl', ['$scope', '$element', 'Vlc', '$modal', function($scope, $element, Vlc, $modal){
    $scope.stopPlay = Vlc.stop;
    $scope.startPlay = Vlc.play;
    $scope.nextPlay = Vlc.next;
    $scope.prevPlay = Vlc.previous;
    $scope.showSettings = function(){
        $modal.open({
            templateUrl: 'js/views/settings.html',
            size: 'lg',
            controller: 'SettingsCtrl'
        });
    }
}]);

app.controller('MainCtrl', ['$scope',function($scope){
    $scope.title = 'Vlc web-UI';
}]);

app.controller('PlaylistCtrl', ['$scope', '$element', '$timeout', 'Vlc', function($scope, $element, $timeout, Vlc){
    Vlc.playlist().success(function (data) {
        $timeout(function(){
            $scope.items = new Playlist(data);
        });
    });

    $scope.startItem = Vlc.play;
}]);

app.controller('StatusCtrl', ['$scope', '$element', 'Vlc', '$interval', '$rootScope',function($scope, $element, Vlc, $interval, $rootScope){
    $interval(function () {
        Vlc.status().success(function(data){
            $scope.status = $rootScope.status = new Status(data);
        });
    }, 1000);
}]);

app.controller('SettingsCtrl', ['$scope', 'SettingSrv', function($scope, SettingSrv) {
    /**
     * @type {ConnectionSettings} connection
     */
    var connectionSettings = SettingSrv.grab();

    angular.extend($scope, {
        password: connectionSettings.password,
        host: connectionSettings.port,
        port: connectionSettings.host
    });

    $scope.save = function () {
        SettingSrv.save($scope);
        $scope.$close();
    };
}]);