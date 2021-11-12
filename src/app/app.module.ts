import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './router.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SubhomeComponent } from './subhome/subhome.component';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostInputComponent } from './post-input/post-input.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { LoginComponent } from './login/login.component';
import { LoggingInterceptor } from './logging.interceptor';
import { LoginApiInterceptor } from './inter/login-api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    SubhomeComponent,
    PostComponent,
    PostInputComponent,
    MyDirectiveDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
