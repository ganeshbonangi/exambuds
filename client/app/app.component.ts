import { Component, Inject } from '@angular/core';

import { MdcDialog, MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    escapeToClose: boolean = true;
    clickOutsideToClose: boolean = true;

    constructor(public dialog: MdcDialog) { }

    openAlert() {
        const dialogRef = this.dialog.open(DialogAlert, {
            escapeToClose: this.escapeToClose,
            clickOutsideToClose: this.clickOutsideToClose,
            buttonsStacked: false,
            id: 'my-dialog'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

}


@Component({
    template: `
  <mdc-dialog>
    <mdc-dialog-container>
      <mdc-dialog-surface>
        <mdc-dialog-title>Discard draft?</mdc-dialog-title>
        <mdc-dialog-actions>
          <button mdcDialogButton mdcDialogAction="close">Cancel</button>
          <button mdcDialogButton mdcDialogAction="accept">Discard</button>
        </mdc-dialog-actions>
      </mdc-dialog-surface>
    </mdc-dialog-container>
  </mdc-dialog>
  `,
})
export class DialogAlert {
    constructor(public dialogRef: MdcDialogRef<DialogAlert>) { }
}








