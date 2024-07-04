import { Component, OnInit } from '@angular/core';
import { ApiService } from '../modules/users/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sideBarStatus:boolean = true
  adminName:string = ""
  userCount:number = 0

  constructor(private api:ApiService, private router:Router){}

  //lifecycle method
  ngOnInit(): void {
    this.api.getAllUsersAPI().subscribe((result:any) => {
      this.userCount = result.length
      this.adminName = result[0].name
    })
  }

  menuBtnClicked(){
    this.sideBarStatus = !this.sideBarStatus
  }

  adminChange(event:any){
    this.adminName = event
  }

  logout(){
    sessionStorage.clear()
    this.router.navigateByUrl("")
  }

}
