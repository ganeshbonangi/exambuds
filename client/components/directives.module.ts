import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OauthButtonsComponent } from './oauth-buttons/oauth-buttons.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        AuthModule,
        MatButtonModule,
        RouterModule,
    ],
    declarations: [
        NavbarComponent,
        FooterComponent,
        OauthButtonsComponent,
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        OauthButtonsComponent,
    ]
})
export class DirectivesModule {}
