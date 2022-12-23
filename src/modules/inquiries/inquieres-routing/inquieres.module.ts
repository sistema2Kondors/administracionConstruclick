import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InquieresRoutingModule } from './inquieres-routing.module';
import { CheckCategoriesComponent } from '../componentes/check-categories/check-categories.component';
import { CheckProviderComponent } from '../componentes/check-provider/check-provider.component';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { AppCommonModule } from '@common/app-common.module';



@NgModule({
  declarations: [
    CheckCategoriesComponent,
    CheckProviderComponent,
    
  ],
  imports: [
    CommonModule,
    InquieresRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NavigationModule,
    AppCommonModule
    
  ]
})
export class InquieresModule { }
