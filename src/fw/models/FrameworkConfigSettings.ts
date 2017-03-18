import { IconFiles } from './IconFiles';

export interface FrameworkConfigSettings{
  
  showLanguageSelector? : boolean;
  showUserControls? : boolean;
  showStatusBar? : boolean;
  showStatusBarBreakpoint: number;
  socialIcons? : Array<IconFiles>;
}