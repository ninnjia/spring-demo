import { Injectable } from '@angular/core';
import {MessagesService} from "./messages.service";
import {Observable, Subject} from "rxjs/index";
import {Messages} from "../models/messages";

@Injectable({
  providedIn: 'root'
})
export class MessagesDataService {

  constructor(
    private messagesService:MessagesService,
  ) { }
  private _mannerMessagesState:Subject<Messages[]> = new Subject();
  public currentMannerMessagesState() :Observable<Messages[]> {
    return this._mannerMessagesState;
  }
  public selectMannerMessagesState():void{
    this._mannerMessagesState.next(this.messagesService.queryMannerMessages())
  }

}
