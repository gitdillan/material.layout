import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule,MatSelectModule,MatInputModule,MatCheckboxModule,MatButtonModule,MatExpansionModule} from '@angular/material';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserThemeComponent } from './layout/user/user-theme/user-theme.component';
import { UserHeaderComponent } from './layout/user/user-header/user-header.component';
import { UserFooterComponent } from './layout/user/user-footer/user-footer.component';
import { AdminThemeComponent } from './layout/admin/admin-theme/admin-theme.component';
import { AdminHeaderComponent } from './layout/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './layout/admin/admin-footer/admin-footer.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    UserThemeComponent,
    UserHeaderComponent,
    UserFooterComponent,
    AdminThemeComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
