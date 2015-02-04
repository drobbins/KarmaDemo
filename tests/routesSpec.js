describe("KarmaDemo routes", function () {
    beforeEach(module("KarmaDemo"));
    var $state, Resolvers;
    beforeEach(inject(function (_$state_, _Resolvers_){
        $state = _$state_;
        Resolvers = _Resolvers_;
    }));
    it("/maintenance/karmas", function () {
        karmaListRoute = $state.get("KarmaList");
        expect(karmaListRoute.url).toBe("/maintenance/karmas");
        expect(karmaListRoute.controller).toBe("KarmaListController");
        expect(karmaListRoute.resolve.karmas).toBe(Resolvers.karmaListResolver);
    });
});