import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_service/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:any[]=[];
  constructor(private userservice:UsersService) { }

  ngOnInit(): void {
    this.userservice.getAllUser().subscribe((x)=>{
      this.userList=x;
    });
  }

}
