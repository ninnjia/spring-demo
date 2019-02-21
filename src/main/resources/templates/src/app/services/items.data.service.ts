import { Injectable } from '@angular/core';
import {ItemsService} from "./items.service";
import {Items} from "../models/items";
import {Observable, Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {

  constructor(
    private itemsService:ItemsService,
  ) { }

  private _mannerItemsState:Subject<Items[]> = new Subject();
  public currentMannerItemsState():Observable<Items[]>{
    return this._mannerItemsState;
  }
  public selectMannerItemsState():void{
    this._mannerItemsState.next(this.itemsService.queryMannerItems())
  }

}
