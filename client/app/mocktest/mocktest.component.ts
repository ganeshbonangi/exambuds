import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Thing {
    name: string;
    info?: string;
}

@Component({
    selector: 'mocktest',
    template: require('./mocktest.html'),
    styles: [require('./mocktest.scss')],
})
export class mocktestComponent implements OnInit {

    awesomeThings: Thing[] = [];
    newThing = '';

    static parameters = [HttpClient];
    constructor(private http: HttpClient) {
        this.http = http;

    }

    ngOnInit() {
        return this.http.get('/api/things')
            .subscribe((things: Thing[]) => {
                this.awesomeThings = things;
            });
    }


    addThing() {
        if(this.newThing) {
            let text = this.newThing;
            this.newThing = '';

            return this.http.post('/api/things', { name: text })
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
