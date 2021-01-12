import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from './model/class';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent  {

  user: User = new User();
  constructor(private registerService: RegisterService) { }

  register(){
    alert(JSON.stringify(this.user));
    this.registerService.register(this.user).subscribe(response => {
      alert(JSON.stringify(response));
    })
  }


}
