import { Component, OnInit } from '@angular/core';

import { ScreenService } from '../service/screen.service';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private screenService : ScreenService,
              private menuService: MenuService) { }

  ngOnInit() {
  }

}
