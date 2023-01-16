// <reference path="angular.min.js" />

// Atlas
var myApp = angular.module("Yaz", []);

myApp.controller("Countries", function ($scope) {
  var technologies = [
    { name: "c#", likes: 0, dislikes: 0 },
    { name: "ASP.NET", likes: 0, dislikes: 0 },
    { name: "Javascript", likes: 0, dislikes: 0 },
    { name: "Python", likes: 0, dislikes: 0 },
  ];
  var countries = [
    {
      name: "India",
      src: "/images/Flag_of_India.svg.webp",
      description: "lorem ipsum dolen",
      message: "Hello India",
      cities: [
        { name: "New Delhi" },
        { name: "Kolkata" },
        { name: "Gurugram" },
      ],
    },
    {
      name: "Uk",
      src: "/images/Flag_of_India.svg.webp",
      description: "lorem ipsum dolen",
      message: "Hello UK",
      cities: [{ name: "Manchester" }, { name: "London" }, { name: "Madrid" }],
    },
  ];
  var citizens = {
    firstName: "Ghulam",
    lastName: "Yazdani",
    nationality: "India",
  };
  var companies = [
    { name: "Posist", city: "New Delhi", country: "India", state: "Delhi" },
    { name: "Posist", city: "New Delhi", country: "India", state: "Delhi" },
    { name: "Posist", city: "New Delhi", country: "India", state: "Delhi" },
    { name: "Posist", city: "New Delhi", country: "India", state: "Delhi" },
    { name: "Posist", city: "New Delhi", country: "India", state: "Delhi" },
    { name: "Posist", city: "New Delhi", country: "India", state: "Delhi" },
  ];
  var employees = [
    {
      name: "Ben",
      dateOfBirth: new Date("November 23, 1980"),
      gender: "Male",
      salary: 55000.788,
    },
    {
      name: "Sara",
      dateOfBirth: new Date("May 05, 1970"),
      gender: "Female",
      salary: 68000,
    },
    {
      name: "Mark",
      dateOfBirth: new Date("August 15, 1974"),
      gender: "Male",
      salary: 57000,
    },
    {
      name: "Pam",
      dateOfBirth: new Date("October 27, 1979"),
      gender: "Female",
      salary: 53000,
    },
    {
      name: "Todd",
      dateOfBirth: new Date("December 30, 1983"),
      gender: "Male",
      salary: 60000,
    },
  ];

  $scope.employees = employees;
  $scope.rowCount = 3;
  $scope.sortColumn = "name";
  $scope.reverseSort = false;
  $scope.countries = countries;
  $scope.citizens = citizens;
  $scope.companies = companies;
  $scope.technologies = technologies;

  $scope.incrementLikes = function (technology) {
    technology.likes++;
  };
  $scope.incrementDislikes = function (technology) {
    technology.dislikes++;
  };

  $scope.sortData = function (column) {
    $scope.reverseSort =
      $scope.sortColumn == column ? !$scope.reverseSort : false;
    $scope.sortColumn = column;
  };

  $scope.getSortClass = function (column) {
    if ($scope.sortColumn == column) {
      return $scope.reverseSort ? "arrow-down" : "arrow-up";
    }

    return "";
  };
});
