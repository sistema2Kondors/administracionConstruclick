import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import * as SupportRequestsContainers from './containers';
import { SupportRequestsComponent } from './containers/support-requests/support-requests.component';

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
    declarations: [...SupportRequestsContainers.containers, SupportRequestsComponent],
    exports: [...SupportRequestsContainers.containers, SupportRequestsComponent],
})
export class SupportRequestsModule {}
