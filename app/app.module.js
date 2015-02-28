var app = angular.module('index', [ ]);

app.controller('ClosetController', ['$http', function($http) {
    this.closetData = [];

    // apply closet data from json or WS
    var closet = this;
    $http.get("assets/js/closetData.json").success(function (data) {
        closet.closetData = data;
    });
}]);

app.controller('TabController', ['$log', function($log) {
    this.tabTest = 1;

    this.setTab = function(tab) {
        this.tabTest = tab;
    };

    this.isSet = function(tab) {
        return this.tabTest === tab;
    };
}]);
