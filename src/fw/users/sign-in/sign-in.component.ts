import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserApi } from '../user-api';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  private formError : string;
  private submitting : boolean = false;

  constructor(private userApi : UserApi, private router: Router) { }

  onSubmit(form : NgForm)
  {
    if(form.valid)
    {
      this.submitting = true;
      this.formError = null;
      
      this.userApi.signIn(form.value.username, form.value.password, form.value.rememberMe).subscribe(
        (data) => {
          this.submitting = false;
          this.router.navigate(["/authenticated"]);
        },
        (err) =>{
          this.submitting = false;
          this.formError = err;
        });
    }
  }

}
