import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service/user.service';
import { RepoService } from 'src/app/repo-service/repo.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    
  user:any = [];
  repos:any = [];
  userName:string = ""
  show = true

  constructor(private userService:UserService, private repoService:RepoService, private http:HttpClient){
   
  }

  ngOnInit(): void {

    this.userService.getUser(this.userName).subscribe(data=>{
      this.user = data
    })

    this.repoService.getRepo(this.userName).subscribe(data=>{
      this.repos = data
    })
    
  }
  getData(userName){
    this.userService.getUser(this.userName).subscribe(data=>{
      this.user = data
      this.show = !this.show
    })
  }

  getRepos(userName){
    this.repoService.getRepo(this.userName).subscribe(data=>{
      this.repos = data
      
      
    })
  }
}
