import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, XHRBackend} from '@angular/http';
import { AppComponent }  from './components/app/app.component';
import {InMemoryWebApiModule, InMemoryBackendService, SEED_DATA}     from 'angular2-in-memory-web-api';
import {routing, appRoutingProviders} from "./app.routing";
import {TodayService} from "./components/today/today.service";
import {TasksData} from "./tasks-data";
import {TodayComponent} from "./components/today/today.component";
import {TomorrowService} from "./components/tomorrow/tomorrow.service";

@NgModule({
  imports: [
      BrowserModule,
      routing,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(TasksData)
  ],
  providers: [
      appRoutingProviders,
      TodayService,
      TomorrowService,
      {provide: XHRBackend, useClass: InMemoryBackendService},
      {provide: SEED_DATA, useClass: TasksData}
  ],
  declarations: [ AppComponent, TodayComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }