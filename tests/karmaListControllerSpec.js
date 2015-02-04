var karma, karmas;

describe("KarmaListController", function() {

  var KarmaListController, KarmaService, $scope;

  beforeEach(module("KarmaDemo"));

  beforeEach(inject(function($controller, $rootScope, _KarmaService_) {
    $scope = $rootScope.$new();
    KarmaListController = $controller("KarmaListController", {
      $scope: $scope,
      karmas: karmas
    });
    KarmaService = _KarmaService_;
  }));

  it("maps the provided karmas on to the scope.", function() {
    return expect($scope.karmas).toBe(karmas);
  });

  it(".remove wraps karma.remove.", function() {
    var spy;
    spy = spyOn(KarmaService, "remove");
    $scope.remove(karma.id);
    return expect(spy).toHaveBeenCalled();
  });

});

karma = {
  id: "1",
  description: "Karma 1"
};

karmas = [karma, karma];