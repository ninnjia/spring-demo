export interface General{
  approvalNum:number;
  scheduleNum:number;
  todoNum:number;
  gmailNum:number;
  jiraNum:number;
  calendarNum:number;
  datas:number[];
}

export interface ApprovalMain{
  itemsNum:number,
  approvals:Approval[]
}
export interface Approval{
  photoArr:string,
  title:string,
  description:string,
  date:string
}

export interface ScheduleMain{
  itemsNum:number,
  schedules:Schedule[]
}
export interface Schedule{
  photoArr:string,
  title:string,
  timeArea:string,
  personName:string
}

export interface TodoMain{
  itemsNum:number,
  todos:Todo[]
}
export interface Todo{
  id:number,
  description:string
}

export interface GmailMain{
  mailsNum:number,
  gmails:Gmail[]
}
export interface Gmail{
  id:number,
  name:string,
  type:string,
  description:string
}

export interface BriefingMain{
  briefingsNum:number,
  briefings:Briefing[]
}
export interface Briefing{
  id:number,
  title:string,
  date:string,
  name:string
}
