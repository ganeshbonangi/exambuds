import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TcComponent } from './tc.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


export const ROUTES: Routes = [
    { path: 'tc', component: TcComponent },
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
        TcComponent
    ],
    exports: [
        TcComponent
    ],
})
export class TCModule {}
