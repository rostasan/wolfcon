/**
 * Created by 0 on 4/4/2016.
 */
(function(){
    'use strict';

    angular.module('wolfApp')
        .service('DataService', ['$http','$q', DataService]);{
            $http.get("../../data.php")
                .then(function(response) {$scope.names = response.data.records;});

}})();