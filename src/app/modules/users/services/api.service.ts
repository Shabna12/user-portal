import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../user-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  addUserAPI(user:userModel){
    return this.http.post(`${this.server_url}/users`,user)
  }

  getAllUsersAPI(){
    return this.http.get(`${this.server_url}/users`)
  }

  getSingleUserAPI(userId:any){
    return this.http.get(`${this.server_url}/users/${userId}`)
  }

  editUserAPI(user:userModel){
    return this.http.put(`${this.server_url}/users/${user.id}`,user)
  }

  removeUserAPI(userId:any){
    return this.http.delete(`${this.server_url}/users/${userId}`)
  }
}
