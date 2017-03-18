import { Component } from '@angular/core';

import {FrameworkConfigService} from '../fw/service/framework-config.service';
import {FrameworkConfigSettings} from '../fw/models/FrameworkConfigSettings';
import {IconFiles} from '../fw/models/IconFiles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private frameworkConfigService: FrameworkConfigService){

    let config: FrameworkConfigSettings ={
        showLanguageSelector : true,
        showStatusBar: true,
        showUserControls: true,
        showStatusBarBreakpoint: 800,
        socialIcons: [
          { alt: 'Facebook', imageFile: 'assets/social-fb-bw.png', link: 'http://www.facebook.com'},
          { alt: 'Google +', imageFile: 'assets/social-google-bw.png', link: 'http://www.google.com'},
          { alt: 'Twitter', imageFile: 'assets/social-twitter-bw.png', link: 'http://www.twitter.com'},
        ]
    }
    frameworkConfigService.configure(config);

  }
  
}
