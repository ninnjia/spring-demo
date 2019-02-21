import {Component, Input, OnInit} from '@angular/core';
import {MannerDataService} from "../../services/manner.data.service";
import {Friends} from "../../models/friends";
import {FriendsDataService} from "../../services/friends.data.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.less']
})
export class FriendsComponent implements OnInit {

  @Input("friends") friends:Friends[];
  constructor(
    private mannerDataService:MannerDataService,
    private friendsDataService:FriendsDataService,
  ) { }

  ngOnInit() {
    this.friendsDataService.selectMannerFriendsState();
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
