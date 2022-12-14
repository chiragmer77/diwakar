import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from './helpers/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
