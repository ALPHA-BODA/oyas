import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';
import { LoginRequest } from './model/login-request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   url ='http://localhost:8081/';
  constructor(private httpClient: HttpClient, private router:Router,private jwtService:JwtService) { }

  public login(loginRequest:LoginRequest):any{
    return this.httpClient.post(this.url+'api/users/login',loginRequest)
    .subscribe(data=>{
      localStorage.setItem("token",JSON.stringify(data));
       this.router.navigateByUrl('menu');
    
    });
    
  }


  public getAuthorities():string []{
      let jwt = localStorage.getItem("token");
      if(jwt!=null){
        let jwtValue = JSON.parse(jwt)['jwt'];
        let jwtDecoded =this.jwtService.decodeToken(jwtValue);
        let authorities = jwtDecoded['authorities'];
        return authorities;
      }
      return [];
  }

  public hasAuthority(authorithyName:string):boolean{
    return this.getAuthorities().includes(authorithyName);
  }
}
