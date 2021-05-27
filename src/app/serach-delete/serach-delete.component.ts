import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-serach-delete',
  templateUrl: './serach-delete.component.html',
  styleUrls: ['./serach-delete.component.css']
})
export class SerachDeleteComponent implements OnInit {
  users: any;
  email!: string;


  constructor(private service:RegisterService) {

  }


  public deleteUser(id:string){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
   }

   public findUserByEmailId(){
    let resp= this.service.getUserByEmail(this.email);
    resp.subscribe((data)=>this.users=data);
   }



  ngOnInit() {
    let resp= this.service.getUsers();
    resp.subscribe((data)=>this.users=data);

  }

}
