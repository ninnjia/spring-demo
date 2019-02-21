import {Component, Input, OnInit} from '@angular/core';
import {MannerDataService} from "../../services/manner.data.service";
import {Messages} from "../../models/messages";
import {MessagesDataService} from "../../services/messages.data.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {
  @Input("messages") messages:Messages[];

  constructor(
    private mannerDataService:MannerDataService,
    private messagesDataService:MessagesDataService,
  ) { }

  ngOnInit() {
    this.messagesDataService.selectMannerMessagesState();
  }

  // constant for swipe action: left or right
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  // action triggered when user swipes
  swipe(action = this.SWIPE_ACTION.RIGHT) {
    if(action === this.SWIPE_ACTION.RIGHT){
      this.mannerDataService.setTabsState(false)
    }else{
      this.mannerDataService.setTabsState(true)
    }
  }

}
