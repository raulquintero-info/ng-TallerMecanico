import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarModule } from './core/modules/navbar/navbar.module';
import { FrontofficeModule } from './contexts/frontoffice/frontoffice.module';
import { BackofficeModule } from './contexts/backoffice/backoffice.module';
import { GuestModule } from './contexts/guest/guest.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NavbarModule,
    FrontofficeModule,
    BackofficeModule,
    GuestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
