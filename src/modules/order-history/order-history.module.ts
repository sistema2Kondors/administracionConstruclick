import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import * as ordersHistoryContainers from './containers';
import { OrderHistoryComponent } from './containers/order-history/order-history.component';

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
    declarations: [...ordersHistoryContainers.containers, OrderHistoryComponent],
    exports: [...ordersHistoryContainers.containers, OrderHistoryComponent],
})
export class OrdersHistoryModule {}
