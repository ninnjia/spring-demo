import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Account} from '../../models/account'
import {MannerDataService} from "../../services/manner.data.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-account',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  constructor(
    private mannerDataService:MannerDataService,
    private http: HttpClient,
  ) {

  }
  @Input() accounts: Account[];
  @Input('activeAccount') activeAccount: Account;

  ngOnInit() {
    this.mannerDataService.select(1);
    this.mannerDataService.getAccounts();
  }

  accountExpanded:boolean = false;
  changeAccount(num:number){
    this.accountExpanded = false;
    this.mannerDataService.select(num);
  }

  sendRedirect(){
    this.http.get('/test2').subscribe(p => {
      console.log('输出 ')
      console.log(p)
    })
  }
}
