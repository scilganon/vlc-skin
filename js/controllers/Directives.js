var directives = angular.module('Directives', []);

directives.directive('checkStatus', ['$rootScope', function($rootScope){
    return {
        link: function(scope, element, attr){
            $rootScope.$watch('status',function(oldValue){
                return oldValue && $(element).html($rootScope.status.pageTitle);
            });
        }
    };
}]);