import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private menuService : MenuService) { }

}
