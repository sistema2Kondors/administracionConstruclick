import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import * as HelpCenterContainers from './containers';
import { HelpCenterComponent } from './containers/help-center/help-center.component';

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
    declarations: [...HelpCenterContainers.containers, HelpCenterComponent],
    exports: [...HelpCenterContainers.containers, HelpCenterComponent],
})
export class HelpCenterModule {}
