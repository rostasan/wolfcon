/**
 * Created by 0 on 3/19/2016.
 */
angular
    .module('wolfApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html'

            })
    })