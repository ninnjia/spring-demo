import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2,
  ViewChild
} from '@angular/core';
import {BreakpointObserver, Breakpoints, MediaMatcher} from "@angular/cdk/layout";
import {MannerDataService} from "./services/manner.data.service";
import {Account} from "./models/account"
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";
import {ItemsDataService} from "./services/items.data.service";
import {MessagesDataService} from "./services/messages.data.service";
import {FriendsDataService} from "./services/friends.data.service";
import {Messages} from "./models/messages";
import {Items} from "./models/items";
import {Friends} from "./models/friends";
import {MainDataService} from "./services/main.data.service";
import {api} from "./config/api";

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  isOpen:boolean=true;
  headerImgPath:string = `${api}ani_logo_title_white.svg`;
  mobileQuery: MediaQueryList;
  mobileQueryPad: MediaQueryList;
  @ViewChild('drawer') drawer:any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  currentMannerItemsState$:Observable<Items[]> = this.itemsDataService.currentMannerItemsState();
  currentMannerMessagesState$:Observable<Messages[]> = this.messagesDataService.currentMannerMessagesState();
  currentMannerFriendsState$:Observable<Friends[]> = this.friendsDataService.currentMannerFriendsState();
  accountSelected$:Observable<Account> = this.mannerDataService.selected$;
  accountsState$:Observable<Account[]> = this.mannerDataService.accounts$;
  private _mobileQueryListener: () => void;
  private _mobileQueryPadListener: () => void;
  tabChoiceNum:number = 0;
  constructor(
    // changeDetectorRef: ChangeDetectorRef,
    // media: MediaMatcher,
    private breakpointObserver: BreakpointObserver,
    private mannerDataService: MannerDataService,
    private itemsDataService: ItemsDataService,
    private messagesDataService: MessagesDataService,
    private friendsDataService: FriendsDataService,
  ){
    // this.mobileQueryPad = media.matchMedia('(max-width: 1024px)')
    // this._mobileQueryPadListener = () => changeDetectorRef.detectChanges();
    // this.mobileQueryPad.addListener(this._mobileQueryPadListener)
  }
  ngOnInit(){
    this.mannerDataService.currentTabsState().subscribe((p:boolean) => {
      if(p){
        if(this.tabChoiceNum == 2){
          this.tabChoiceNum = 0;
        }else{
          this.tabChoiceNum = this.tabChoiceNum + 1;
        }
      }else{
        if(this.tabChoiceNum == 0){
          this.tabChoiceNum = 2;
        }else{
          this.tabChoiceNum = this.tabChoiceNum-1;
        }
      }
    })
  }
  activeAccount:Account={
    id:null,
    username:null,
    email:null,
    photoArr:null,
  };
  accounts:Account[];

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.mobileQueryPad.removeListener(this._mobileQueryPadListener)
  }
  ngDoCheck(){
  }
  stripShow:boolean=true;
  showStrip(){
    this.stripShow = !this.stripShow;
  }
  openedChange(){
    // console.log('openedChange')
  }
  closedStart(){
    this.isOpen = false;
  }
  onPositionChanged(){
    // console.log('onPositionChanged')
  }
  openedStart(){
    this.isOpen = true;
  }
  openItems(){
    this.tabChoiceNum = 0;
    this.drawer.open();
  }
  openMessages(){
    this.tabChoiceNum = 1;
    this.drawer.open();
  }
  openFriends(){
    this.tabChoiceNum = 2;
    this.drawer.open();
  }

  // constant for swipe action: left or right
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  // action triggered when user swipes
  swipe(action = this.SWIPE_ACTION.RIGHT) {
    if(action === this.SWIPE_ACTION.RIGHT){
      this.drawer.open();
    }else{
      // this.drawer.close();
    }
  }
}
