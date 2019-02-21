import { Injectable } from '@angular/core';
import {Items} from "../models/items";
import {api} from "../config/api";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  items:Items[] = [
    {
      id:0,
      photoArr:`${api}anicel_logo.svg`,
      name:'Anicel'
    },
    {
      id:1,
      photoArr:`${api}drive-128.png`,
      name:'Drive'
    },
    {
      id:2,
      photoArr:`${api}one.png`,
      name:'One-up'
    },
    {
      id:3,
      photoArr:`${api}gmail_512dp.png`,
      name:'Gmail'
    },
    {
      id:4,
      photoArr:`${api}groups_512dp.png`,
      name:'Groups'
    },
  ];

  queryMannerItems():Items[]{
    return this.items;
  }

}
