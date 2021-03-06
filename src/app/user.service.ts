import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = '/api/users';
  private baseUrl1 = '/api/users/5';
  islogin = false;
  admin = false;
  suser = false;
  choixmenu : string  = 'A';
  /*listData : User[];
  public dataForm:  FormGroup;*/

  //constructor() { }

  constructor(private http: HttpClient,private datePipe: DatePipe) { }
  login(login: String): Observable<Object> {
    
     return this.http.get(`${this.baseUrl1}/${login}`);
   }  
 
  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}`);
  }
  /*transformDate(date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }*/
}
