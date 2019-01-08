import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


export const ROUTES: Routes = [
    { path: 'about-us', component: AboutUsComponent },
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
        AboutUsComponent
    ],
    exports: [
        AboutUsComponent
    ],
})
export class AboutUsModule {}
