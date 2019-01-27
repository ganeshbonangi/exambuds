import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {validator} from "fast-json-patch";

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

    static parameters = [HttpClient];

    constructor(private http: HttpClient) {
        this.http = http;

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
