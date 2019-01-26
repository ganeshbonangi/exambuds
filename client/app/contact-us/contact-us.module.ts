import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from './contact-us.component';

import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";


export const ROUTES: Routes = [
    {path: 'contact-us', component: ContactUsComponent},
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        MaterialModule
    ],
    declarations: [
        ContactUsComponent
    ],
    exports: [
        ContactUsComponent,
        FormsModule,
        ReactiveFormsModule
    ],
})
export class ContactUsModule {
}
