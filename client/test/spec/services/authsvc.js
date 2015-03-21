'use strict';

describe('Service: AuthSvc', function () {

  // load the service's module
  beforeEach(module('myNodeJsApp'));

  // instantiate service
  var AuthSvc;
  beforeEach(inject(function (_AuthSvc_) {
    AuthSvc = _AuthSvc_;
  }));

  it('should do something', function () {
    expect(!!AuthSvc).toBe(true);
  });

});
