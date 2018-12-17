import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { mocktestComponent } from './mocktest.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


export const ROUTES: Routes = [
    { path: 'mocktest', component: mocktestComponent },
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        MatFormFieldModule,
        MatSelectModule
    ],
    declarations: [
        mocktestComponent
    ],
    exports: [
        mocktestComponent
    ],
})
export class MocktestModule {}
