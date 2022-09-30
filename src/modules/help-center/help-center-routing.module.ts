import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import * as HelpCenterContainers from './containers';
import { HelpCenterModule } from './help-center.module';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'centro de ayuda',
            breadcrumbs: [
                {
                    text: 'centro de ayuda',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: HelpCenterContainers.HelpCenterComponent,
    },
];

@NgModule({
    imports: [HelpCenterModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class HelpCenterRoutingModule {}
