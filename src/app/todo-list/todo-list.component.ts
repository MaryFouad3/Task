import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
users:string[]=[];
users2:string[]=[];
  constructor() {

  }

  ngOnInit(): void {
    this.users2=this.users;
  }

  print(text:string){
    console.log(text);
  }
  print2(e:any){
    console.log(e.target.value);
  }
  adduser(username:string){
    this.users.push(username);
    console.log(this.users);
  }
  remove1(index:any){
    this.users.splice(index,1);
  }
  filter1(index:string){
    this.users2=this.users.filter(item=>(item.includes(index)));
    console.log(this.users2);
  }

}
