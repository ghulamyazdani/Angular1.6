// <reference path="angular.min.js" />

// Atlas
var myApp = angular.module("Yaz", []);

myApp.controller("MessageController", function ($scope) {
  var experiences = {
    name: "sagerai",
    months: 7,
    description: "lorem ipsum dolen",
  };
  $scope.experiences = experiences;
});
