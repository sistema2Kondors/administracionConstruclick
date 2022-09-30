import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import * as CatalogoContainers from './containers';
import { CatalogoComponent } from './containers/catalogo/catalogo.component';

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
    declarations: [...CatalogoContainers.containers, CatalogoComponent],
    exports: [...CatalogoContainers.containers, CatalogoComponent],
})
export class CatalogoModule {}
