'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var examCtrlStub = {
  index: 'examCtrl.index',
  show: 'examCtrl.show',
  create: 'examCtrl.create',
  update: 'examCtrl.update',
  destroy: 'examCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var examIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './exam.controller': examCtrlStub
});

describe('Exam API Router:', function() {

  it('should return an express router instance', function() {
    expect(examIndex).to.equal(routerStub);
  });

  describe('GET /api/exams', function() {

    it('should route to exam.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'examCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/exams/:id', function() {

    it('should route to exam.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'examCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/exams', function() {

    it('should route to exam.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'examCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/exams/:id', function() {

    it('should route to exam.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'examCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/exams/:id', function() {

    it('should route to exam.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'examCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/exams/:id', function() {

    it('should route to exam.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'examCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
