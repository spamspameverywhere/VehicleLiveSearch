angular.module("AutoApp", ["ngMaterial"])

  .controller("mainCtrl", function($scope, dataService, $http) {

    dataService.getCars(function(response) {
      $scope.cars = response.data;
    });

    dataService.getMakes(function(response) {
      $scope.makes = response.data;
    });

  })


  .service("dataService", function($http) {

    this.getCars = function(callback) {
      $http.get("file:///Users/LSS/Documents/JSFS/AutoGame/cars.json").then(callback)
    };

    this.getMakes = function(callback) {
      $http.get("file:///Users/LSS/Documents/JSFS/AutoGame/makes.json").then(callback)
    };

  })

;
