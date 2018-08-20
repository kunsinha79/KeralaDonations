import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ProgressComponent } from './progress/progress.component';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'supporters',
    pathMatch: 'full'
  },
  {
    path: 'supporters',
    component: MainComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProgressComponent,
    AdminComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
