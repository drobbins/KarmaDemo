describe("Resolvers", function () {

    beforeEach(module("KarmaDemo"));

    var Resolvers, KarmaService, $stateParams, invoke;
    beforeEach(inject(function (_Resolvers_, _KarmaService_, _$stateParams_, $injector) {
        Resolvers = _Resolvers_;
        KarmaService = _KarmaService_;
        $stateParams = _$stateParams_;
        invoke = $injector.invoke;
    }));

    var testResolver = function(resolver, service, method, value) {
        var result, spy;
        spy = spyOn(service, method).and.returnValue(value);
        result = invoke(resolver);
        expect(result).toBe(value);
        return expect(spy).toHaveBeenCalled();
    };

    it("karmaListResolver resolves a list of the current karmas", function () {
        karmas = ["karma", "karma"];
        testResolver(Resolvers.karmaListResolver, KarmaService, "query", karmas);
    });
});
