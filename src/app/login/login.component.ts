import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from './Model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();
  message: string;
  adminEmail: string;
  adminPassword: string;

  constructor(private LoginService: LoginService, private router: Router) { }

  loginCheck() {
    this.adminEmail = this.login.email;
    this.adminPassword = this.login.password;
    if (this.adminEmail == "admin" && this.adminPassword == "admin") {
      this.router.navigateByUrl('admin-dashboard');
    }
    else {
      console.log(this.login);
      this.LoginService.login(this.login).subscribe(response => {
        alert(JSON.stringify(response));
        console.log(response);
        if (response.status == 'SUCCESS') {
          let userId = response.userId;
          let name = response.name;
          sessionStorage.setItem('userId', String(userId));
          sessionStorage.setItem('name', name);
          // this.router.navigate(['user-dashboard']);
        }
        else
          this.message = response.message;
      })
    }
  }
}
