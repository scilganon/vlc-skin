var app = angular.module('app', [
    'Services'
]);

app.controller('ControlsCtrl', ['$scope', '$element', 'Vlc', function($scope, $element, Vlc){
    $scope.stopPlay = Vlc.stop;
    $scope.startPlay = Vlc.play;
}]);

app.controller('PlaylistCtrl', ['$scope', '$element', '$timeout', 'Vlc', function($scope, $element, $timeout, Vlc){
    Vlc.playlist().success(function (data) {
        $timeout(function(){
            $scope.items = new Playlist(data);
        });
    });

    $scope.startItem = Vlc.play;
}]);