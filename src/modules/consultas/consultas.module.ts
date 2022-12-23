import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { NgSelectModule } from '@ng-select/ng-select';


import * as ConsultasContainers from './containers';
import { CheckCategoriesComponent } from './containers/check-categories/check-categories.component';

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
    declarations: [...ConsultasContainers.containers, CheckCategoriesComponent],
    exports: [...ConsultasContainers.containers, CheckCategoriesComponent],
})
export class ConsultasModule {}
