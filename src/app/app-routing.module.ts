import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserThemeComponent } from './layout/user/user-theme/user-theme.component';
import { AdminThemeComponent } from './layout/admin/admin-theme/admin-theme.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  {path: 'user', component:UserThemeComponent,
  children:[
    {path: 'dashboard', component:UserDashboardComponent},
  ]},
  {path:'admin', component:AdminThemeComponent,
    children:[
      {path: 'dashboard', component:AdminDashboardComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
