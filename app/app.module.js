var app = angular.module('index', [ ]);

app.controller('ClosetController', ['$http', function($http) {
    this.closetData = [];

    // apply closet data from json or WS
    var closet = this;
    $http.get("assets/js/closetData.json").success(function (data) {
        closet.closetData = data;
    });
}]);
