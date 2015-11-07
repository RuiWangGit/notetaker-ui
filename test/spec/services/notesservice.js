'use strict';

describe('Service: NotesService', function () {

  // load the service's module
  beforeEach(module('notetakeruiApp'));

  // instantiate service
  var NotesService;
  beforeEach(inject(function (_NotesService_) {
    NotesService = _NotesService_;
  }));

  it('should do something', function () {
    expect(!!NotesService).toBe(true);
  });

});
