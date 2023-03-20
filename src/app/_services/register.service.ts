import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 constructor(private http:HttpClient) { }
  register(name:string,username:string,phone_number:string,email:string,nameplaintextPassword:string):Observable<any>{
    return this.http.post(' https://127.0.0.1:8000/user/create',{name,username,phone_number,email,nameplaintextPassword})
  }
}
