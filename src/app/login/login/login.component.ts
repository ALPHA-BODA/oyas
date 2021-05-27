import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { LoginRequest } from '../model/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(private loginService:LoginService , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  login(){
      let loginRequest = new LoginRequest(this.formGroup.value.email,this.formGroup.value.password);
      this.loginService.login(loginRequest);
  }
}
