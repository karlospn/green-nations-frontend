import { Component, OnInit, Input, HostBinding, HostListener, ElementRef } from '@angular/core';

import { MenuItem } from '../../models/MenuItem';
import { MenuService } from '../../service/menu.service';
 
@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {

  @Input() item: MenuItem;

  @HostBinding('class.parent-is-popup')
  @Input() parentIsPopup = true;

  isActiveRoute = false;
  mouseInPopup = false;
  mouseInItem = false;
  popupLeft = 0;
  popupTop = 34;

  constructor(private menuService: MenuService) { }

  onPopupMouseEnter($event){
    if(!this.menuService.isVertical)
    {
      this.mouseInPopup = true;
    }
  }

  onPopupMouseLeave($event){
    if(!this.menuService.isVertical)
    {
      this.mouseInPopup = false;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) : void {
    if(!this.menuService.isVertical)
    {
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event) : void {
    if(!this.menuService.isVertical)
    {
      if(this.item.subMenu)
      {
        this.mouseInItem = true;
        if(this.parentIsPopup)
        {
          this.popupLeft = 160;
          this.popupTop = 0;
        }
      }
    }
  }
}
