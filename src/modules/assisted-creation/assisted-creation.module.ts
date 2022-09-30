import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import * as AssistedCreationContainers from './containers';
import { AssistedCreationComponent } from './containers/assisted-creation/assisted-creation.component';

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
    declarations: [...AssistedCreationContainers.containers, AssistedCreationComponent],
    exports: [...AssistedCreationContainers.containers, AssistedCreationComponent],
})
export class AssistedCreationModule {}
