import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import * as PersonalInformationContainers from './containers';
import { PersonalInformationComponent } from './containers/personal-information/personal-information.component';

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
    declarations: [...PersonalInformationContainers.containers, PersonalInformationComponent],
    exports: [...PersonalInformationContainers.containers, PersonalInformationComponent],
})
export class PersonalInformationModule {}
