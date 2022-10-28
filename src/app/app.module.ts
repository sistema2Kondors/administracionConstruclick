import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
