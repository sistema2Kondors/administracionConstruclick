import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { ArchwizardModule } from 'angular-archwizard';

import * as OrdersStepperComponent from './components';
import * as OngoingOrdersContainers from './containers';
import { OngoingOrdersComponent } from './containers/ongoing-orders/ongoing-orders.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        ArchwizardModule,
    ],
    providers: [],
    declarations: [...OngoingOrdersContainers.containers, OngoingOrdersComponent],
    exports: [...OngoingOrdersContainers.containers, OngoingOrdersComponent],
})
export class OngoingOrdersModule {}
