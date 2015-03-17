// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

    .controller('MainCtrl', function ($scope) {
        $scope.message= "whatta";
        var subtotal = $scope.subtotal;
        $scope.tipCalc = function(){
            var tipAmt = parseInt($scope.choice, 10);
            return tipAmt * $scope.subtotal
        };

        $scope.tipCalc2 = function(){
            var tipAmt = parseInt($scope.choice, 10);
            return tipAmt
        };

        $scope.tipCalc3 = function(){
            return $scope.subtotal * $scope.choice;
        };

        $scope.tipCalc4 = function(){
            return $scope.choice;

        };

        $scope.tipCalc5 = function(){
            return subtotal;
            console.log("tipcalc5")
        };
    });

