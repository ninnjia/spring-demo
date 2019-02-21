import { Injectable } from '@angular/core';
import {MainService} from "./main.service";
import {Observable, Subject} from "rxjs/index";
import {ApprovalMain, BriefingMain, General, GmailMain, ScheduleMain, TodoMain} from "../models/main";
import {HttpClient} from "@angular/common/http";
import {HttpTest} from "../models/test";

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  constructor(
    private mainService:MainService,
  ) { }

  private _GeneralMainState:Subject<General> = new Subject();
  public currentGeneralMainState():Observable<General>{
    return this._GeneralMainState;
  }
  public selectGeneralMainState():void {
    return this._GeneralMainState.next(this.mainService.queryGeneral())
  }
  private _approvalMainState:Subject<ApprovalMain> = new Subject();
  public currentApprovalMainState():Observable<ApprovalMain>{
    return this._approvalMainState;
  }
  public selectApprovalMainState():void {
    return this._approvalMainState.next(this.mainService.queryApprovalMain())
  }

  private _scheduleMainState :Subject<ScheduleMain> = new Subject();
  public currentScheduleMainState():Observable<ScheduleMain>{
    return this._scheduleMainState;
  }
  public selectScheduleMainState():void {
    return this._scheduleMainState.next(this.mainService.queryScheduleMain())
  }

  private _todoMainState:Subject<TodoMain> = new Subject();
  public currentTodoMainState():Observable<TodoMain>{
    return this._todoMainState;
  }
  public selectTodoMainState():void {
    return this._todoMainState.next(this.mainService.queryTodoMain())
  }

  public addTodo(todo:string):void{
    this.mainService.addTodo(todo).subscribe((p:object) => {
      if(p){
        this.selectTodoMainState()
      }
    })
  }

  private _gmailMainState:Subject<GmailMain> = new Subject();
  public currentGmailMainState():Observable<GmailMain>{
    return this._gmailMainState;
  }
  public selectGmailMainState():void {
    return this._gmailMainState.next(this.mainService.queryGmailMain())
  }

  private _briefingMainState:Subject<BriefingMain> = new Subject();
  public currentBriefingMainState():Observable<BriefingMain>{
    return this._briefingMainState;
  }
  public selectBriefingMainState():void {
    return this._briefingMainState.next(this.mainService.queryBriefingMain())
  }
}
