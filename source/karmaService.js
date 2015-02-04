angular.module("KarmaDemo")
    .service("KarmaService", function ($resource) {
        return $resource("/karmas/:id", { id: '@id'});
    });