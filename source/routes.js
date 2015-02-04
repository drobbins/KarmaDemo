angular.module("KarmaDemo")
    .config(function ($stateProvider, $urlRouterProvider, Resolvers) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("KarmaList", {
                url: "/maintenance/karmas",
                controller: "KarmaListController",
                resolve: {
                    karmas: Resolvers.karmaListResolver
                }
            })
    });