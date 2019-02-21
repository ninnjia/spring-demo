import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ContainerModule} from "./container/container.module";
import {ShareModule} from "./share.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ItemsComponent} from "./manner/items/items.component";
import {MessagesComponent} from "./manner/messages/messages.component";
import {FriendsComponent} from "./manner/friends/friends.component";
import * as Hammer from 'hammerjs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AccountComponent } from './manner/account/account.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorHandlerService} from "./interceptor/error-handler.service";


export class MyHammerConfig extends HammerGestureConfig  {
  // overrides = <any>{
  //   'swipe': {velocity: 0.4, threshold: 20} // override default settings
  // }
  overrides = <any> {
    'pinch': { enable: false },
    'rotate': { enable: false }
  }
}
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    MessagesComponent,
    FriendsComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShareModule,
    ContainerModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig},
    {provide: ErrorHandler, useClass: ErrorHandlerService},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
