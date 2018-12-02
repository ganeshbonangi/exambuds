'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var counterCtrlStub = {
  index: 'counterCtrl.index',
  show: 'counterCtrl.show',
  create: 'counterCtrl.create',
  update: 'counterCtrl.update',
  destroy: 'counterCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var counterIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './counter.controller': counterCtrlStub
});

describe('Counter API Router:', function() {

  it('should return an express router instance', function() {
    expect(counterIndex).to.equal(routerStub);
  });

  describe('GET /api/counters', function() {

    it('should route to counter.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'counterCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/counters/:id', function() {

    it('should route to counter.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'counterCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/counters', function() {

    it('should route to counter.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'counterCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/counters/:id', function() {

    it('should route to counter.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'counterCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/counters/:id', function() {

    it('should route to counter.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'counterCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/counters/:id', function() {

    it('should route to counter.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'counterCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
