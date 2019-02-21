import { Injectable } from '@angular/core';
import {Account} from "../models/account"
import {api} from "../config/api";

@Injectable({
  providedIn: 'root'
})
export class MannerService {

  constructor() { }

  accounts:Account[]=[
    {
      id:1,
      username:'Yeh,Ching-Zhou',
      email:'Yeh.chingzhou@ani.cloud',
      photoArr:`${api}ani_2012_logo.svg`
    },
    {
      id:2,
      username:'灵动元点',
      email:'ani.cloud',
      photoArr:`${api}ani_2012_logo.svg`
    }
  ]

  public queryAccountList() : Account[]{
    return this.accounts;
  }
}
