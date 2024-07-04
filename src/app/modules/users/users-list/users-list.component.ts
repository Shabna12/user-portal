import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { userModel } from '../user-model';
import jspdf from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  //for pagination
  p: number = 1;

  //search
  searchKey:string = ""

  allUsers:userModel[] = []

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllUsers()
  }


  getAllUsers(){
    this.api.getAllUsersAPI().subscribe((result:any) => {
      this.allUsers = result.filter((user:any) => user.id!="1")
      console.log(this.allUsers);
      
    })
  }

  removeUser(userId:any){
    this.api.removeUserAPI(userId).subscribe((result:any) =>{
      this.getAllUsers()
    })
  }

  // sort by id
  sortById(){
    this.allUsers.sort((user1:any,user2:any)=>user1.id.localeCompare(user2.id))
  }
  //sort by name
  sortByName(){
    this.allUsers.sort((user1:any,user2:any)=>user1.name.localeCompare(user2.name))
    console.log(this.allUsers);
  }

  //export
  generatePDF(){
    let pdf = new jspdf()
    let head = [['ID','NAME','EMAIL','STATUS']]
    let body:any = []
    this.allUsers.forEach((item:any) => {
      body.push([item.id,item.name,item.email,item.status=="1"?"Active":"InActive"])
    })
    pdf.setFontSize(16)
    pdf.text("ALL USERS LIST", 10,12)
    autoTable(pdf,{
      head,body
    })
    pdf.output('dataurlnewwindow')
    pdf.save("all-users-list.pdf")
  }

}
