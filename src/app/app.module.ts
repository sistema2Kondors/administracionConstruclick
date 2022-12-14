import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthService } from '@modules/auth/services';



const ngWizardConfig: NgWizardConfig = {
    theme: THEME.default,
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgWizardModule.forRoot(ngWizardConfig),
        ArchwizardModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
        NgSelectModule
    ],
    providers: [
        AuthService,
        

    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
