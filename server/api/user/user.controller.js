'use strict';

import User from './user.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
    res.status(statusCode).json(err);
  }
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

/**
 * Get list of users
 * restriction: 'admin'
 */
export function index(req, res) {
  return User.find({}, '-salt -password').exec()
    .then(users => {
      return res.status(200).json(users);
    })
    .catch(handleError(res));
}

/**
 * Get list of students
 * restriction: 'no restruction'
 */
export function getFilteredStudents(req, res) {
  return User.find({'name':{'$regex':req.body.name,'$options':'i'}},'-salt -password').exec()
    .then(users => {
      return res.status(200).json(users);
    })
    .catch(handleError(res));
}


/**
 * Creates a new user
 */
export function create(req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.save()
    .then(function(user) {
      var token = jwt.sign({ _id: user._id }, config.secrets.session, {
        expiresIn: 60 * 60 * 5
      });
      res.json({ token });
    })
    .catch(validationError(res));
}

/**
 * Get a single user
 */
export function show(req, res, next) {
  var userId = req.params.id;

  return User.findById(userId).exec()
    .then(user => {
      if (!user) {
        return res.status(404).end();
      }
      res.json(user.profile);
    })
    .catch(err => next(err));
}

/**
 * Deletes a user
 * restriction: 'admin'
 */
export function destroy(req, res) {
  return User.findByIdAndRemove(req.params.id).exec()
    .then(function() {
      res.status(204).end();
    })
    .catch(handleError(res));
}

/**
 * Change a users password
 */
export function changePassword(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  return User.findById(userId).exec()
    .then(user => {
      if (user.authenticate(oldPass)) {
        user.password = newPass;
        return user.save()
          .then(() => {
            res.status(204).end();
          })
          .catch(validationError(res));
      } else {
        return res.status(403).end();
      }
    });
}
/**
 * Get my info
 */
export function me(req, res, next) {
  var userId = req.user._id;
  return User.findOne({ _id: userId }, '-salt -password').exec()
    .then(user => { // don't ever give out the password or salt
      if (!user) {
        return res.status(404).end();
      }
      return res.json(user);
    })
    .catch(err => next(err));
}

/**
 * Authentication callback
 */
export function authCallback(req, res, next) {
  res.redirect('/');
}
/**
*sending reset email for the user
*/
export function resetEmail(req, res, next){
    User.findOne({
        email: req.body.email
      }).exec(function(err, user) {
        if (user) {
          //done(err, user);
            crypto.randomBytes(20, function(err, buffer) {
            var token = buffer.toString('hex');
            //done(err, user, token);
            User.findByIdAndUpdate({ _id: user._id }, { resetPasswordToken: token, resetPasswordExpires: Date.now() + 86400000 }, { upsert: true, new: true }).exec(function(err, new_user) {
              //done(err, token, new_user);
              let host = req.get('host');
              let protocal = req.protocol + '://'
              var data = {
                to: user.email,
                from: '"ExamBuds Admin"<exambuds@gmail.com>',
                template: 'forgot-password-email',
                subject: 'ExamBuds password help has arrived!',
                html:'Dear '+user.name+',<br/><br/>Your requested for password reset, kindly use this <a href="'+protocal+host+'/resetpwd?token='+token+'">link</a> to reset your password.<br/><br/>Cheers!',
                text:''
              };
              var transporter = nodemailer.createTransport({
                  service: 'Gmail',
                  auth: {
                      user: 'exambuds@gmail.com',
                      pass: 'Exambuds@1'
                  }
              });
              transporter.sendMail(data, function(err) {
                if (!err) {
                  return res.json({ message: 'Kindly check your email for further instructions' });
                } else {
                  return res.status(501).end();//failed send mail
                }
              });
            });
          }); 
        } else {
          return res.status(404).end();
        }
      })
}
/**
* forget password
*/
export function forgotPassword(req, res, next) {
  var userId = req.body;
  return User.findOne({ resetPasswordToken: req.body.resetPasswordToken }).exec()
    .then(user => { // don't ever give out the password or salt
      if (!user) {
        return res.status(404).end();
      }else{
        user.password = req.body.newPassword;
        user.resetPasswordToken = '';
        user.resetPasswordExpires = 0;
        return user.save()
          .then(() => {
            return res.status(204).end();
          })
          .catch(validationError(res));
      }
      return res.json(user);
    })
    .catch(err => next(err));
}