import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IApiResponse } from "src/app/users";

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http:HttpClient) { }

  getUser(userName):Observable<IApiResponse[]>{
    return this.http.get<IApiResponse[]>("https://api.github.com/users/"+userName+"/repos?acces_token=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")
  }
}

