describe("Service: KarmaService", function () {

    // Load the module
    beforeEach(module("KarmaDemo"));

    // Instantiate the service
    var KarmaService, $httpBackend
    beforeEach(inject(function (_KarmaService_, _$httpBackend_) {
        KarmaService = _KarmaService_;
        $httpBackend = _$httpBackend_;
    }));

    // Ensure all the expected HTTP requests were made
    afterEach( function () {
        $httpBackend.verifyNoOutstandingExpectation()
        $httpBackend.verifyNoOutstandingRequest()
    });

    // Ensure KarmaService is an Angular $resource
    it("query() method GETs from /karmas", function () {
        $httpBackend.expect("GET", "/karmas").respond(200);
        KarmaService.query();
        $httpBackend.flush();
    });
});