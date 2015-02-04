angular.module("KarmaDemo")
    .controller("KarmaListController", function ($scope, karmas, KarmaService) {
        $scope.karmas = karmas;
        $scope.remove = function (id) { KarmaService.remove({ id: id });}
    });