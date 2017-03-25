import { Component, OnInit, Input, HostBinding, HostListener, ElementRef, Renderer } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MenuItem } from '../../models/MenuItem';
import { MenuService } from '../../service/menu.service';
 
@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;

  @HostBinding('class.parent-is-popup')
  @Input() parentIsPopup = true;

  isActiveRoute = false;
  mouseInPopup = false;
  mouseInItem = false;
  popupLeft = 0;
  popupTop = 34;

  constructor(private router: Router, private menuService: MenuService, private renderer : Renderer, private el : ElementRef) { }

  ngOnInit(): void {
    this.checkRoute(this.router.url);

    this.router.events.subscribe((event) =>  {
          if(event instanceof NavigationEnd){
            this.checkRoute(event.url);
          }
      });
  }

  checkRoute(route : string){
    this.isActiveRoute = (route == "/" + this.item.route)
  }

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

  @HostListener('click', ['$event'])
  onClick(event) : void {

    event.stopPropagation();
    
    if(this.item.subMenu)
    {
      if(this.menuService.isVertical)
        this.mouseInPopup =  !this.mouseInPopup;
    }
    else if (this.item.route)
    {
      let mouseEvent = new MouseEvent('mouseleave', {bubbles : true});
      this.renderer.invokeElementMethod(this.el.nativeElement, 'dispatchEvent', [mouseEvent]);
      this.router.navigate(['/' + this.item.route]);
    }
  }
}
