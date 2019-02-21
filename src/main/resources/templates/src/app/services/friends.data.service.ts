import { Injectable } from '@angular/core';
import {FriendsService} from "./friends.service";
import {Friends} from "../models/friends";
import {Observable, Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class FriendsDataService {

  constructor(
    private friendsService : FriendsService,
  ) { }

  private _mannerFriendsState:Subject<Friends[]> = new Subject();
  public currentMannerFriendsState():Observable<Friends[]>{
    return this._mannerFriendsState;
  }
  public selectMannerFriendsState():void{
    this._mannerFriendsState.next(this.friendsService.queryMannerFriends())
  }

}
