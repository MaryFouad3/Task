import { Component, OnInit } from '@angular/core';
import { IUser } from '../_model/iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:IUser= { username: '', password: '' }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user)
  }

}
