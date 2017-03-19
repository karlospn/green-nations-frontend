import { Injectable } from '@angular/core';
import { MenuItem } from '../models/MenuItem';

@Injectable()
export class MenuService {
    
    public Items : Array<MenuItem>;
    public isVertical : boolean = true;
    public showingLeftSideMenu : boolean = false;

    public toggleLeftSideMenu() : void{
        if(this.showingLeftSideMenu) this.showingLeftSideMenu = false;
        else this.showingLeftSideMenu = true;
    }
}