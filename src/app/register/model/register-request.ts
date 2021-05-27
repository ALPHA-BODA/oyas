export class RegisterRequest {
  firstname:string;
  lastname:string;
  email:string ;
  password:string ;
  tel:string;

  constructor(firstname:string,   lastname:string,email:string ,  password:string,  tel:string)
  {
      this.firstname= firstname;
      this.lastname= lastname;
      this.email = email;
      this.password = password;
      this.tel=tel;
  }

}
