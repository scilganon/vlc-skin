var app = angular.module('app', [
    'Services',
    'Directives'
]);

app.controller('ControlsCtrl', ['$scope', '$element', 'Vlc', function($scope, $element, Vlc){
    $scope.stopPlay = Vlc.stop;
    $scope.startPlay = Vlc.play;
    $scope.nextPlay = Vlc.next;
    $scope.prevPlay = Vlc.previous;
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