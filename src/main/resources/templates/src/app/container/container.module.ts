import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {ContainerRoutingModule} from "./container-routing.module";
import {ShareModule} from "../share.module";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {HighchartsChartComponent} from "highcharts-angular";
import { ApprovalsComponent } from './home/approvals/approvals.component';
import { SchedulesComponent } from './home/schedules/schedules.component';
import { TodoComponent } from './home/todo/todo.component';
import { GmailComponent } from './home/gmail/gmail.component';
import { BriefingComponent } from './home/briefing/briefing.component';

@NgModule({
  declarations: [
    HomeComponent,
    HighchartsChartComponent,
    ApprovalsComponent,
    SchedulesComponent,
    TodoComponent,
    GmailComponent,
    BriefingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ShareModule,
    ContainerRoutingModule,
  ]
})
export class ContainerModule { }
