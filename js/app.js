'use strict';

angular
    .module('wolfApp',[
        'ngRoute',
        'ngAnimate',
        'ngMessages',
        'users'
    ])
    .config(function($mdThemingProvider, $mdIconProvider){
        $mdIconProvider
            .defaultIconSet("./images/svg/avatars.svg", 128)
            .icon("menu"       , "./images/svg/menu.svg"        , 24)
            .icon("share"      , "./images/svg/share.svg"       , 24)
            .icon("google_plus", "./images/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./images/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./images/svg/twitter.svg"     , 512)
            .icon("phone"      , "./images/svg/phone.svg"       , 512)
            .icon("wolfcon"    , "./imager/svg/wolfcon.svg"     , 512);
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    });
