'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var reportCtrlStub = {
  index: 'reportCtrl.index',
  show: 'reportCtrl.show',
  create: 'reportCtrl.create',
  update: 'reportCtrl.update',
  destroy: 'reportCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var reportIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './report.controller': reportCtrlStub
});

describe('report API Router:', function() {

  it('should return an express router instance', function() {
    expect(reportIndex).to.equal(routerStub);
  });

  describe('GET /api/reports', function() {

    it('should route to report.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'reportCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/reports/:id', function() {

    it('should route to report.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'reportCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/reports', function() {

    it('should route to report.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'reportCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/reports/:id', function() {

    it('should route to report.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'reportCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/reports/:id', function() {

    it('should route to report.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'reportCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/reports/:id', function() {

    it('should route to report.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'reportCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
