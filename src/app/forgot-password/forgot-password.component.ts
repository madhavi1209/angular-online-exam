import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent{
    ForgotPasswordForm:FormGroup;
    message:string;
    IsvalidForm=true;
    constructor(private loginService:LoginService,private router:Router){}

    ngOnInit(){
      this.ForgotPasswordForm=new FormGroup({
        'email':new FormControl(null,[Validators.required,Validators.email]),
      });
    }

ForgotPassword(form){
  console.log(form)
  if(form.valid){
    this.IsvalidForm=true;
    this.loginService.forgotPassword(this.ForgotPasswordForm.value).subscribe(
      data=>{
        this.ForgotPasswordForm.reset();
        this.message="Reset password link is shared to your email";
      }
    )

  }
  else{
    this.IsvalidForm=false;
  }
}
}


