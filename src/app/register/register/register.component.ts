import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { RegisterRequest } from '../model/register-request';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  formGroup!: FormGroup;
  constructor(private fb:FormBuilder, private registerService: RegisterService) { }
  

 /* ngOnInit(): void {
  }*/
  ngOnInit() {   
    this.infoForm();
   }
   
  get lastname() { return this.formGroup.get('lastname'); }
  get firstname() { return this.formGroup.get('firstname'); }
  get email() { return this.formGroup.get('email'); }
  get passwordd() { return this.formGroup.get('passwordd'); }
  get password() { return this.formGroup.get('password'); }
  get tel() { return this.formGroup.get('tel'); }


   infoForm() {
    this.formGroup = this.fb.group({
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
    //pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. ]*(\\{3})[-. ]*(\\d{4})(?: *x(\\d+))'
        tel: ['', [Validators.required, Validators.minLength(8)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        passwordd: ['', [Validators.required, Validators.minLength(8)]],
        });
    }
 

  /*register(){
    let registerRequest = new RegisterRequest(this.formGroup.value.lastname, this.formGroup.value.firstname,
      this.formGroup.value.email, this.formGroup.value.tel,
      this.formGroup.value.password, );
    this.registerService.login(registerRequest);*/
    register() {
      if (this.formGroup.value.password !== this.formGroup.value.passwordd) {
          console.log("Your passwords do not match.");

          return;
      }
      let req = new RegisterRequest(this.formGroup.value.firstname, this.formGroup.value.lastname,this.formGroup.value.email, this.formGroup.value.password,  this.formGroup.value.tel);
      this.registerService.register(req)
          .subscribe((value) => {
              this.processing = false;
              console.log("Your account was successfully created.");
              this.isLoggingIn = true;
          }, (error) => {
              this.processing = false;
              console.log("Unfortunately we were unable to create your account.");
          });

/*ResetForm() {
            this.crudApi.dataForm.reset();
        }
        onSubmit() {
         
          if (this.crudApi.dataForm.value.password == this.crudApi.dataForm.value.passwordd)
          {
            if (this.crudApi.choixmenu == "A")
            {
              this.addData();
            }
            else
            {
             this.updateData()
            }
          }
          else
          {
            this.toastr.warning( 'Vérifiet votre de passe ...');  
          }
      }*/
       
  }




}
