import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import * as paymentsContainers from './containers';
import { PaymentsComponent } from './containers/payments/payments.component';

/* Containers */

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [],
    declarations: [...paymentsContainers.containers, PaymentsComponent],
    exports: [...paymentsContainers.containers, PaymentsComponent],
})
export class PaymentsModule {}
