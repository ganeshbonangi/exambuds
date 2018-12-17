import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule, MatInputModule } from '@angular/material';


export const ROUTES: Routes = [
    { path: 'contact-us', component: ContactUsComponent },
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
        ContactUsComponent
    ],
    exports: [
        ContactUsComponent
    ],
})
export class ContactUsModule {}
