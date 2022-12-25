import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { Auth1Guard } from './auth1.guard';
import { CrudComponent } from './crud/crud.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ModulesExampleComponent } from './modules-example/modules-example.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivateChild: [Auth1Guard], children: [
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component }
  ] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'pipes', component: PipeExampleComponent },
  { path: 'modules', component: ModulesExampleComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'not-found', component: NotFoundComponent },
  // { path: 'user/:id', component: UserComponent, canActivate: [AuthGuard] },
  // { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
