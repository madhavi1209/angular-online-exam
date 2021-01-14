import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from './model/class';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent  {

  user: User = new User();
  constructor(private registerService: RegisterService,private router:Router) { }

  register(){
    alert(JSON.stringify(this.user));
    this.registerService.register(this.user).subscribe(response => {
      alert(JSON.stringify(response));
      console.log(JSON.stringify(response))
      if(response.status=="SUCCESS"){
        this.router.navigate(['login']);
      }
    })
  }


}
