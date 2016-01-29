describe('todolistController', function() {
  beforeEach(module('todolist'));

  var ctrl

  beforeEach(inject(function($controller) {
    ctrl = $controller('todolistController');
  }));

  it('initialises with an empty list result and term', function() {
  expect(ctrl.searchResult).toBeUndefined();
  expect(ctrl.searchTerm).toBeUndefined();
});
});
