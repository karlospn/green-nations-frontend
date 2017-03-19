import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';

import { ScreenService } from './service/screen.service';
import { FrameworkConfigService } from './service/framework-config.service';
import { MenuService } from './service/menu.service';

import {ScreenLargeDirective} from './directives/screen-large.directive';
import {ScreenBelowLargeDirective} from './directives/screen-below-large.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenBelowLargeDirective,
    ScreenLargeDirective,
    MenuComponent,
    MenuItemComponent
  ],  
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports: [
    FrameworkBodyComponent,
  ]
})
export class FwModule { }
