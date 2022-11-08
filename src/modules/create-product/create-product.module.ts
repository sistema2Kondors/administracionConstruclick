import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
// import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { NavigationModule } from '@modules/navigation/navigation.module';

import * as CreateProductContainers from './containers';
import { CreateProductComponent } from './containers/create-product/create-product.component';
/* Containers */

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        // AutocompleteLibModule,
    ],
    providers: [],
    declarations: [...CreateProductContainers.containers, CreateProductComponent],
    exports: [...CreateProductContainers.containers, CreateProductComponent],
})
export class CreateProductModule {}
