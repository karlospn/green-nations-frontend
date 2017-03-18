import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';

import { ScreenService } from './service/screen.service';
import { FrameworkConfigService } from './service/framework-config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent
  ],  
  providers: [
    FrameworkConfigService,
    ScreenService
  ],
  exports: [
    FrameworkBodyComponent,
  ]
})
export class FwModule { }