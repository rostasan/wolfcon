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
            .when('/Contacts', {
                templateUrl: 'views/contact.html',
                controller: 'contactController'
            })
            .when('/users', {
                templateUrl: "views/users.html"
            })
            .when('/WolfCon', {
                templateUrl: "views/contact.html"
            })
    });