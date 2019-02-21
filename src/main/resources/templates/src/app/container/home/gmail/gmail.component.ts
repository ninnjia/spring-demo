import {Component, Input, OnInit} from '@angular/core';
import {MainDataService} from "../../../services/main.data.service";
import {GmailMain} from "../../../models/main";

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.less']
})
export class GmailComponent implements OnInit {
  @Input('gmailMain') gmailMain:GmailMain;

  constructor(
    private mainDataService: MainDataService,

  ) { }

  ngOnInit() {
    this.gmailMain = {
      mailsNum:0,
      gmails:[]
    }
    this.mainDataService.selectGmailMainState();
  }

}
