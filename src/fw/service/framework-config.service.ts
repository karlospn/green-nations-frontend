import { Injectable } from '@angular/core';
import { IconFiles } from '../models/IconFiles';
import { FrameworkConfigSettings } from '../models/FrameworkConfigSettings';

@Injectable()
export class FrameworkConfigService {

  private showLanguageSelector : boolean  = true;
  private showUserControls : boolean = true;
  private showStatusBar : boolean = true;
  private showStatusBarBreakpoint: number = 0;
  private socialIcons : Array<IconFiles> = new Array<IconFiles>();

  public configure(settings : FrameworkConfigSettings) : void{
    Object.assign(this, settings);
  }

}
