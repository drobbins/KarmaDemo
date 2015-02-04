angular.module("KarmaDemo")
    .constant("Resolvers", {
        karmaListResolver: function (KarmaService) { return KarmaService.query(); }
    })