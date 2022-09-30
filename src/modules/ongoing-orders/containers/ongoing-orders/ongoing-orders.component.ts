import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardComponent } from 'angular-archwizard';

@Component({
    selector: 'app-ongoing-orders',
    templateUrl: './ongoing-orders.component.html',
    styleUrls: ['./ongoing-orders.component.scss'],
})
export class OngoingOrdersComponent implements OnInit {
    constructor() {}
    @ViewChild('wizard', { static: true }) wizard: any = WizardComponent;
    // goToWizardStep(reference: any) {
    //     this.wizard.goToStep(2);
    // }
    enterSecondStep(param1: any, param2: any) {
        // this.goToWizardStep();
    }

    ngOnInit() {}
}
