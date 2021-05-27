import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isAdmin:boolean=false;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
      this.isAdmin = this.loginService.hasAuthority("admin");
    
  }

}
