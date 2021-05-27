export class User {

    id:number | null;
    firstname:string;
    lastname:string;
    tel:string;
    email:string;
    password:string;


    constructor(id:number | null,
        firstname:string,
        lastname:string,
        tel:string,
        password:string,
        email:string
        ){
            this.id=id;
            this.firstname=firstname;
            this.lastname=lastname;
            this.tel=tel;
            this.email=email;
            this.password=password;

        }

}
