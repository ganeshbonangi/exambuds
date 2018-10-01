import { NgModule } from '@angular/core';
import {
    MdcButtonModule,
    MdcCheckboxModule,
    MdcDialogModule,
    MdcIconModule,
    MdcFormFieldModule,
    MdcListModule,
    MdcTextFieldModule
} from '@angular-mdc/web';

@NgModule({
    exports: [
        MdcButtonModule,
        MdcCheckboxModule,
        MdcDialogModule,
        MdcFormFieldModule,
        MdcIconModule,
        MdcListModule,
        MdcTextFieldModule
    ]
})
export class AppMaterialModule { }
