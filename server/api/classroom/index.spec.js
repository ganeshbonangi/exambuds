'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var classroomCtrlStub = {
  index: 'classroomCtrl.index',
  show: 'classroomCtrl.show',
  create: 'classroomCtrl.create',
  update: 'classroomCtrl.update',
  destroy: 'classroomCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var classroomIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './classroom.controller': classroomCtrlStub
});

describe('Classroom API Router:', function() {

  it('should return an express router instance', function() {
    expect(classroomIndex).to.equal(routerStub);
  });

  describe('GET /api/classrooms', function() {

    it('should route to classroom.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'classroomCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/classrooms/:id', function() {

    it('should route to classroom.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'classroomCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/classrooms', function() {

    it('should route to classroom.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'classroomCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/classrooms/:id', function() {

    it('should route to classroom.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'classroomCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/classrooms/:id', function() {

    it('should route to classroom.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'classroomCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/classrooms/:id', function() {

    it('should route to classroom.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'classroomCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
