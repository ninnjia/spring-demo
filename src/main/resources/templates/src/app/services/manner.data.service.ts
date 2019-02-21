import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs/index";
import {MannerService} from "./manner.service";
import {Account} from "../models/account"

@Injectable({
  providedIn: 'root'
})
export class MannerDataService {

  constructor(
    private mannerService: MannerService,
  ) { }

  private tabsState: Subject<boolean> = new Subject<boolean>();
  public setTabsState(param:boolean): void {
    this.tabsState.next(param);
  }
  public currentTabsState(): Observable<boolean>{
    return this.tabsState.asObservable();
  }



  private _selected: Subject<Account> = new Subject<Account>();
  public selected$ = this._selected.asObservable();
  select(activeAccountId: number) {
    let account = this.mannerService.queryAccountList().filter((p:Account) => p.id === activeAccountId)[0];
    this._selected.next(account);
  }

  private _accounts: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>(null);
  public accounts$ = this._accounts.asObservable();
  getAccounts(){
    this._accounts.next(this.mannerService.queryAccountList());
  }

}
