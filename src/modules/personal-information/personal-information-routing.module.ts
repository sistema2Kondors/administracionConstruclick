import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import * as PersonalInformationContainers from './containers';
import { PersonalInformationModule } from './personal-information.module';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'informacion Personal',
            breadcrumbs: [
                {
                    text: 'Informacion Personal',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: PersonalInformationContainers.PersonalInformationComponent,
    },
];

@NgModule({
    imports: [PersonalInformationModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PersonalInformationRoutingModule {}
