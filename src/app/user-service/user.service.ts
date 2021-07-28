import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user'; 
import { Observable } from 'rxjs';
import { IApiResponse } from 'src/app/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http:HttpClient) { }

  getUser(userName):Observable<IApiResponse[]>{
    return this.http.get<IApiResponse[]>("https://api.github.com/users/"+userName)
  }
}
