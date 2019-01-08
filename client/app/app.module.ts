import {
    NgModule,
    ApplicationRef,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
    removeNgStyles,
    createNewHosts,
    createInputTransfer,
} from '@angularclass/hmr';



import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { AboutUsModule } from './about-us/about-us.module';
import { TCModule } from './tc/tc.module';
import { PrivacyModule } from './privacy/privacy.module';
import { DirectivesModule } from '../components/directives.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

export function tokenGetter() {
    return localStorage.getItem('id_token');
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter,
            }
        }),
        MainModule,
        DirectivesModule,
        AccountModule,
        AdminModule,
        AppRoutingModule,
        ContactUsModule,
        AboutUsModule,
        TCModule,
        PrivacyModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    static parameters = [ApplicationRef];
    constructor(private appRef: ApplicationRef) {
        this.appRef = appRef;
    }

    hmrOnInit(store) {
        if (!store || !store.state) return;
        console.log('HMR store', store);
        console.log('store.state.data:', store.state.data);
        // inject AppStore here and update it
        // this.AppStore.update(store.state)
        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }
        // change detection
        this.appRef.tick();
        Reflect.deleteProperty(store, 'state');
        Reflect.deleteProperty(store, 'restoreInputValues');
    }

    hmrOnDestroy(store) {
        var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // inject your AppStore and grab state then set it on store
        // var appState = this.AppStore.get()
        store.state = {data: 'yolo'};
        // store.state = Object.assign({}, appState)
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        Reflect.deleteProperty(store, 'disposeOldHosts');
        // anything you need done the component is removed
    }
}
