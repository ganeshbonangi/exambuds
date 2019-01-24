// @flow
import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from '../../../components/auth/auth.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

interface User {
    name: string;
    email: string;
    password: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl('', {
                validators: [Validators.required, Validators.email]
            }),
            password: new FormControl('', {validators: [Validators.required]})
        });
    }

    onSubmit() {
        console.log(this.loginForm.value.email);
        console.log(this.loginForm.value.password);
        /*  return this.authService.login({
              email: this.loginForm.value.email,
              password: this.loginForm.value.password
          })*/
    }
}
