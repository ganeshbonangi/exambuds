// @flow
import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ValidationError } from 'mongoose';
import { AuthService } from '../../../components/auth/auth.service';

interface User {
    name: string;
    email: string;
    password: string;
    role: string;
    mobileNumber: string;
}

@Component({
    selector: 'signup',
    template: require('./signup.html'),
})
export class SignupComponent {
    user: User = {
        role:'user',
        name: '',
        email: '',
        password: '',
        mobileNumber:''
    };
    errors: {field?: Error} = {};
    submitted = false;
    AuthService;
    Router;


    static parameters = [AuthService, Router];
    constructor(_AuthService_: AuthService, router: Router) {
        this.AuthService = _AuthService_;
        this.Router = router;    
        this.user = {
                        role:'user',
                        name: '',
                        email: '',
                        password: '',
                        mobileNumber:''
                    };
        }
/*
    register(form) {
        if(form.invalid) return;

        this.submitted = true;

        return this.AuthService.createUser({
            name: this.user.name,
            email: this.user.email,
            password: this.user.password
        })
            .then(() => {
                // Account created, redirect to home
                this.Router.navigateByUrl('/home');
            })
            .catch((err: {errors: {field: ValidationError}}) => {
                this.errors = err.errors;

                // Update validity of form fields that match the mongoose errors
                Object.entries(err.errors).forEach(([field, error]: [string, ValidationError]) => {
                    this.errors[field] = error.message;

                    if(field === 'email' && error.kind === 'user defined') {
                    form.form.controls[field].setErrors({inUse: true});
                }
                });

                this.submitted = false;
            });
    }*/
    register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.AuthService.createUser({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          cell:this.user.mobileNumber,
          role:this.user.role

        })
        .then(() => {
          // Account created, redirect to home
          this.Router.navigateByUrl('/home');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};

          // Update validity of form fields that match the mongoose errors
         /* angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });*/
        });
    }
  }
}
