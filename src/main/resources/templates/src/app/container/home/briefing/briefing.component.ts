import {Component, Input, OnInit} from '@angular/core';
import {MainDataService} from "../../../services/main.data.service";
import {BriefingMain} from "../../../models/main";

@Component({
  selector: 'app-briefing',
  templateUrl: './briefing.component.html',
  styleUrls: ['./briefing.component.less']
})
export class BriefingComponent implements OnInit {

  @Input('briefingMain') briefingMain:BriefingMain;
  constructor(
    private mainDataService: MainDataService,

  ) { }

  ngOnInit() {
    this.briefingMain = {
      briefingsNum:0,
      briefings:[]
    }
    this.mainDataService.selectBriefingMainState();
  }

}
