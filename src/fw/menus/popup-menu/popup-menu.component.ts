import { Component, OnInit, Input } from '@angular/core';

import { MenuService } from '../../service/menu.service';
import { MenuItem } from '../../models/MenuItem';

@Component({
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {

  @Input() menu : Array<MenuItem>;
  
  constructor(private menuService : MenuService) { 
  }

  ngOnInit() {
  }

}
