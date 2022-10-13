import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloCompComponent } from './hello-comp/hello-comp.component';
import { StructDirComponent } from './struct-dir/struct-dir.component';
import { TooltipDirective } from './tooltip.directive';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoItemsComponent } from './todo/todo-items/todo-items.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';
import { ModalComponent } from './modal/modal.component';
import { ParentWrapperComponent } from './service-learning/parent-wrapper/parent-wrapper.component';
import { Sibling1Component } from './service-learning/sibling1/sibling1.component';
import { Sibling2Component } from './service-learning/sibling2/sibling2.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptor/api.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LifecycleComponent } from './pages/about/lifecycle/lifecycle.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';   
import { AngularEditorModule } from '@kolkov/angular-editor';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloCompComponent,
    StructDirComponent,
    TooltipDirective,
    ChildComponent,
    ParentComponent,
    TodoFormComponent,
    TodoItemsComponent,
    TodoComponent,
    MyCurrencyPipe,
    ModalComponent,
    ParentWrapperComponent,
    Sibling1Component,
    Sibling2Component,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    LifecycleComponent,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularEditorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
