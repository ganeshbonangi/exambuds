import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/students', controller.getFilteredStudents);
router.post('/forgotPassword', controller.forgotPassword);
router.post('/resetEmail', controller.resetEmail);
router.post('/', controller.create); 
router.post('/contact',controller.contact); 
module.exports = router;
