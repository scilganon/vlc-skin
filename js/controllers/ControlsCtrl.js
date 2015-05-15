var app = angular.module('app', []);

app.controller('ControlsCtrl', ['$scope', '$element', '$document', function($scope, $element, $document){
    var collection = new ControllCollection();

    collection.addDefault();
    $element.html(collection.render($element));

}]);