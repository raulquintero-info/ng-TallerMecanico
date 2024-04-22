import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { PublicofficeModule } from './contexts/publicoffice/public.module';
import { FrontofficeModule } from './contexts/frontoffice/frontoffice.module';
import { BackofficeModule } from './contexts/backoffice/backoffice.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './core/modules/auth/auth.module';
import { authInterceptorProviders } from './core/guards/auth.interceptor';
import { NotAuthorizedComponent } from './shared/pages/not-authorized/not-authorized.component';
import { ToasterComponent } from './shared/components/toaster/toaster.component';
import { ToastModule } from './core/modules/toast/toast.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    NotAuthorizedComponent,
    ToasterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    AuthModule,
    PublicofficeModule,
    FrontofficeModule,
    BackofficeModule,
    ToastModule,
    FormsModule
  ],
  providers: [ authInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
