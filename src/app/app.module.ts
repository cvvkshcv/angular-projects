import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { ModifyInterceptor } from './modify.interceptor';
import { SubHomeComponent } from './home/sub-home/sub-home.component';
import { AnotherSubHomeComponent } from './home/another-sub-home/another-sub-home.component';
import { CrudComponent } from './crud/crud.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { UpperPipe } from './pipe-example/upper.pipe';
import { ModulesExampleComponent } from './modules-example/modules-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    Page1Component,
    Page2Component,
    NotFoundComponent,
    UserComponent,
    SubHomeComponent,
    AnotherSubHomeComponent,
    CrudComponent,
    PipeExampleComponent,
    UpperPipe,
    ModulesExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
