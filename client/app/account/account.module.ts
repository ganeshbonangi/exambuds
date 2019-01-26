import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from '../../components/directives.module';

import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';
import {MaterialModule} from '../material.module';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
//import { FormsModule } from './material.module';

const accountRoutes: Routes = [{
    path: 'login',
    component: LoginComponent,
}, {
    path: 'settings',
    component: SettingsComponent,
}, {
    path: 'signup',
    component: SignupComponent,
}];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(accountRoutes),
        DirectivesModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
        SettingsComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AccountModule {}
