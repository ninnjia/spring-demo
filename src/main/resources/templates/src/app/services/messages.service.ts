import { Injectable } from '@angular/core';
import {Messages} from "../models/messages";
import {api} from "../config/api";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor() { }

  private messages:Messages[] = [
    {
      id:0,
      photoArr:`${api}favicon.ico`,
      type:'Messenger',
      email:'',
      time:'now',
      person:'Justin Rhyss',
      description:'Do you want to go see Inception tonight?'
    },
    {
      id:1,
      photoArr:`${api}gmail_512dp.png`,
      type:'Gmail',
      email:'aliconnors@gmail.com',
      time:'5m',
      person:'Ali Connors',
      description:"Game tomorrow Don't forget to bring..."
    }
  ]

  public queryMannerMessages():Messages[]{
    return this.messages;
  }
}
