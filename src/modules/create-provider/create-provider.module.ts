import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';

import { NavigationModule } from '@modules/navigation/navigation.module';
import { NgSelectModule } from '@ng-select/ng-select';

import * as CreateProviderContainers from './containers';
import { CreateProviderComponent } from './containers/create-provider/create-provider.component';
/* Containers */

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        NgSelectModule
    ],
    providers: [],
    declarations: [...CreateProviderContainers.containers, CreateProviderComponent],
    exports: [...CreateProviderContainers.containers, CreateProviderComponent],
})
export class CreateProviderModule {}
