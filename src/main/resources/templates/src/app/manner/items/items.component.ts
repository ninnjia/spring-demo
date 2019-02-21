import {Component, Input, OnInit} from '@angular/core';
import {MannerDataService} from "../../services/manner.data.service";
import {Items} from "../../models/items";
import {ItemsDataService} from "../../services/items.data.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
  @Input("items") items:Items[];
  constructor(
    private mannerDataService:MannerDataService,
    private itemsDataService:ItemsDataService,
  ) { }

  ngOnInit() {
    this.itemsDataService.selectMannerItemsState();
    document.addEventListener('touchmove', function (event) {
      event.preventDefault();
    }, false);
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
