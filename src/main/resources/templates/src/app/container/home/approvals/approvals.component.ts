import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";
import {MainDataService} from "../../../services/main.data.service";
import {ApprovalMain} from "../../../models/main";

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.less']
})
export class ApprovalsComponent implements OnInit {

  @Input('approvalMain') approvalMain:ApprovalMain;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private mainDataService: MainDataService,
  ) { }

  ngOnInit() {
    this.approvalMain = {
      itemsNum:0,
      approvals:[]
    }
    this.mainDataService.selectApprovalMainState();
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

}
