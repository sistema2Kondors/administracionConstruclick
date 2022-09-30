import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import * as MassCreationContainers from './containers';
import { MassCreationComponent } from './containers/mass-creation/mass-creation.component';

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
    declarations: [...MassCreationContainers.containers, MassCreationComponent],
    exports: [...MassCreationContainers.containers, MassCreationComponent],
})
export class MassCreationModule {}
