import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './material.module';

import {
    DialogAlert
} from './app.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AppMaterialModule,
    ],
    declarations: [
        DialogAlert
    ],
    entryComponents: [
        DialogAlert
    ]
})
export class DialogModule { }
