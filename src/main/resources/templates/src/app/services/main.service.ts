import { Injectable } from '@angular/core';
import {ApprovalMain, BriefingMain, General, GmailMain, ScheduleMain, TodoMain} from "../models/main";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {HttpTest} from "../models/test";
import {api} from "../config/api";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http:HttpClient,
  ) { }

  private general : General = {
    approvalNum:9,
    scheduleNum:6,
    todoNum:7,
    gmailNum:48,
    jiraNum:5,
    calendarNum:3,
    datas:[1500000,1600000,500000,600000,1700000,1600000,1550000,1660000,1660000,1660000,1660000,1660000]
  }
  private approvalMain : ApprovalMain = {
    itemsNum:12,
    approvals:[
      {
        photoArr:`${api}favicon.ico`,
        title:'Ben Xu-Expense',
        description:'$70.00-Texi',
        date:'05/10/2018'
      },
      {
        photoArr:`${api}favicon.ico`,
        title:'Ben Xu-Expense',
        description:'$70.00-Texi',
        date:'05/10/2018'
      },
      {
        photoArr:`${api}favicon.ico`,
        title:'Xingwen Wang-Code Review-nemo#issue',
        description:'nemo-Oraginzation account register proc...',
        date:'05/11/2018'
      },
      {
        photoArr:`${api}favicon.ico`,
        title:'Xingwen Wang-Code Review-nemo#issue',
        description:'nemo-Oraginzation account register',
        date:'processes'
      },
      {
        photoArr:`${api}favicon.ico`,
        title:'Ching-Zhou yeh-Shopping Cart-#323',
        description:'$263.00-2 books-Kotlin in Action;Java i...',
        date:'05/09/2018'
      },
      {
        photoArr:`${api}favicon.ico`,
        title:'Ching-Zhou yeh-Shopping Cart-#323',
        description:'$263.00-2 books-Kotlin in Action;Java i...',
        date:'05/09/2018'
      }
    ]
  }
  private scheduleMain : ScheduleMain = {
    itemsNum : 32,
    schedules: [
      {
        photoArr:`${api}favicon.ico`,
        title:'Anicel Product Meeting',
        timeArea:'13:30-15:30 Today',
        personName:'Yue Fei'
      },
      {
        photoArr:`${api}favicon.ico`,
        title:'Ani.cloud Quarterly Metting',
        timeArea:'9:00-15:00 Tomorrow',
        personName:'Yatsen'
      },
      {
        photoArr:`${api}favicon.ico`,
        title:'Deployment-earth#7548',
        timeArea:'1:30-5:30,Tomorrow',
        personName:''
      },
      {
        photoArr:`${api}favicon.ico`,
        title:'Multi card display-wilddragon',
        timeArea:'Tomorrow',
        personName:'Milestone'
      },
      {
        photoArr:`${api}favicon.ico`,
        title:'Multi card display-octopus2',
        timeArea:'Tomorrow',
        personName:'Milestone'
      },
    ]
  }
  private todoMain : TodoMain = {
    itemsNum : 8,
    todos : [
      {
        id:0,
        description:'1Refactoring AniRuleService'
      },
      {
        id:0,
        description:'2Talk with Xingwen about Rules'
      },
      {
        id:0,
        description:'3Fix streaming log on Spark of Earth'
      },
      {
        id:0,
        description:'4Schedule service checking jobs'
      },
      {
        id:0,
        description:'5Refactoring AniRuleService'
      },
      {
        id:0,
        description:'6Talk with Xingwen about Rules'
      },
      {
        id:0,
        description:'7Fix streaming log on Spark of Earth'
      },
      {
        id:0,
        description:'8Schedule service checking jobs'
      },
    ]
  }
  private gmailMain : GmailMain = {
    mailsNum: 42,
    gmails: [
      {
        id:0,
        name:'Xu,Ben',
        type:'#367:API Message Meta-octopus2',
        description:'StubMeta instantiate procedures and serilization...'
      },
      {
        id:0,
        name:'Xu,Ben',
        type:'#367:API Message Meta-octopus2',
        description:'StubMeta instantiate procedures and serilization...'
      },
      {
        id:0,
        name:'Xu,Ben',
        type:'#367:API Message Meta-octopus2',
        description:'StubMeta instantiate procedures and serilization...'
      },
      {
        id:0,
        name:'Xu,Ben',
        type:'#367:API Message Meta-octopus2',
        description:'StubMeta instantiate procedures and serilization...'
      },
      {
        id:0,
        name:'Xu,Ben',
        type:'#367:API Message Meta-octopus2',
        description:'StubMeta instantiate procedures and serilization...'
      }
    ]
  }
  private briefingMain : BriefingMain = {
    briefingsNum:26,
    briefings:[
      {
        id:0,
        title:'Anicel Product Meeting',
        date:'13:30-15:30 Today',
        name:'Yue Fei'
      },
      {
        id:1,
        title:'Ani.cloud Quarterly Metting',
        date:'9:00-15:00 Tomorrow',
        name:'Yatsen'
      },
      {
        id:2,
        title:'Deployment-earth#7548',
        date:'1:30-5:30,Tomorrow',
        name:''
      },
      {
        id:3,
        title:'Multi card display-wilddragon',
        date:'Tomorrow',
        name:'Milestone'
      },
      {
        id:4,
        title:'Multi card display-octopus2',
        date:'Tomorrow',
        name:'Milestone'
      },
    ]
  }

  public queryGeneral():General{
    return this.general;
  }
  public queryApprovalMain():ApprovalMain{
    return this.approvalMain;
  }
  public queryScheduleMain():ScheduleMain{
    return this.scheduleMain;
  }
  public queryTodoMain():TodoMain{
    return this.todoMain;
  }
  public addTodo(todo:string):Observable<object>{
    this.todoMain.todos.push({
      id:0,
      description:todo
    });
    return this.http.get('https://api.weigongxue.com/posts');
  }
  public queryGmailMain():GmailMain{
    return this.gmailMain;
  }
  public queryBriefingMain():BriefingMain{
    return this.briefingMain;
  }
}
