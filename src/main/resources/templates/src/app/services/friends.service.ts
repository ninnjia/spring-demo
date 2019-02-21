import { Injectable } from '@angular/core';
import {Friends} from "../models/friends";
import {api} from "../config/api";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() { }

  private friends:Friends[] = [
    {
      id:0,
      photoArr:`${api}ani_2012_logo.svg`,
      name:'Xu.xinying',
      email:'xu.xinying@ani.cloud'
    },
    {
      id:1,
      photoArr:`${api}ani_2012_logo.svg`,
      name:'Xu.ben',
      email:'xu.ben@ani.cloud'
    },
    {
      id:2,
      photoArr:`${api}ani_2012_logo.svg`,
      name:'Zhang.libo',
      email:'zhang.libo@ani.cloud'
    }
  ]

  public queryMannerFriends():Friends[] {
    return this.friends
  }
}
