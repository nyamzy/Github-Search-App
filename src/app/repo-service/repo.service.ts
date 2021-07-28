import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IRepos} from "src/app/repos";

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http:HttpClient) { }

  getRepo(userName):Observable<IRepos[]>{
    return this.http.get<IRepos[]>("https://api.github.com/users/"+userName+"/repos")
  }
}

