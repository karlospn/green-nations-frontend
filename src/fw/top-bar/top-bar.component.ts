import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from '../service/framework-config.service';
import { UserApi } from '../users/user-api';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  private username : string;

  constructor(private frameWorkConfigService: FrameworkConfigService, 
              private userApi: UserApi) { }

  ngOnInit(): void {
      this.username = this.userApi.getUsername();
  }


  signOut(){
    this.userApi.signOut();
  }

}
