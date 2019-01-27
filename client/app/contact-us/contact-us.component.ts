import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {validator} from "fast-json-patch";
import {AuthService} from "../../components/auth/auth.service";
import {Router} from "@angular/router";

interface Thing {
    name: string;
    info?: string;
}

@Component({
    selector: 'contact-us',
    template: require('./contact-us.html'),
    styles: [require('./contact-us.scss')],
})
export class ContactUsComponent implements OnInit {
    contactForm: FormGroup;

    awesomeThings: Thing[] = [];
    newThing = '';

    static parameters = [HttpClient, AuthService, Router];
    errors = {login: undefined};
    AuthService;
    Router;

    constructor(private http: HttpClient, _AuthService_: AuthService, router: Router) {
        this.http = http;
        this.AuthService = _AuthService_;
        this.Router = router;

    }

    ngOnInit() {
        this.contactForm = new FormGroup({
            fullName: new FormControl('', {
                validators: [Validators.required]
            }),
            email: new FormControl('', {validators: [Validators.required, Validators.email]}),
            message: new FormControl('', {validators: [Validators.required]})
        });
        return this.http.get('/api/things')
            .subscribe((things: Thing[]) => {
                this.awesomeThings = things;
            });
    }

    onSubmit() {
        if (this.contactForm.invalid) return;

       /* return this.AuthService.login({
            name: this.contactForm.value.fullName,
            email: this.contactForm.value.email,
            content: this.contactForm.value.message
        })
            .then(() => {
                // Logged in, redirect to home
                this.Router.navigateByUrl('/home');

            })
            .catch(err => {
                this.errors.login = err.json().message;
            });*/
    }


    addThing() {
        if (this.newThing) {
            let text = this.newThing;
            this.newThing = '';

            return this.http.post('/api/things', {name: text})
                .subscribe(thing => {
                    console.log('Added Thing:', thing);
                });
        }
    }

    deleteThing(thing) {
        return this.http.delete(`/api/things/${thing._id}`)
            .subscribe(() => {
                console.log('Deleted Thing');
            });
    }
}
