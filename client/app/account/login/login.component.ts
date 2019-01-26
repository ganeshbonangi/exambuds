// @flow
import {Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../../components/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface User {
    name: string;
    email: string;
    password: string;
}

@Component({
    selector: 'login',
    template: require('./login.html'),
})
export class LoginComponent implements OnInit{
    loginForm: FormGroup;
    user: User = {
        name: '',
        email: '',
        password: '',
    };
    errors = {login: undefined};
    submitted = false;
    AuthService;
    Router;


    static parameters = [AuthService, Router];
    constructor(_AuthService_: AuthService, router: Router) {
        this.AuthService = _AuthService_;
        this.Router = router;

    }

    ngOnInit(){
        this.loginForm = new FormGroup({
            email: new FormControl('', {
                validators: [Validators.required, Validators.email]
            }),
            password: new FormControl('', { validators: [Validators.required] })
        });
    }

    login(form) {
        if(form.invalid) return;

        return this.AuthService.login({
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        })
            .then(() => {
                // Logged in, redirect to home
                this.Router.navigateByUrl('/home');

            })
            .catch(err => {
                this.errors.login = err.json().message;
            });
    }
}
