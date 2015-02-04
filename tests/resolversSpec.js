describe("Resolvers", function () {

    beforeEach(module("KarmaDemo"));

    var Resolvers, KarmaService, $stateParams, invoke;
    beforeEach(inject(function (_Resolvers_, _KarmaService_, _$stateParams_, $injector) {
        Resolvers = _Resolvers_;
        KarmaService = _KarmaService_;
        $stateParams = _$stateParams_;
        invoke = $injector.invoke;
    }));

    testResolver = function (resolver, service, method, value) {

    };

    it("karmaListResolver resolves a list of the current karmas", function () {
        karmas = ["karma", "karma"];
        testResolver(Resolvers.karmaListResolver, KarmaService, "query", karmas);
    });
});