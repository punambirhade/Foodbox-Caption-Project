import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/api/users';
  private baseUrlController = "http://localhost:8080/api/v1/users";
  searchUrl: any;
  

  constructor(private httpClient: HttpClient) { }


  getUser(){
    return this.httpClient.get<any>("http://localhost:8080/api/v1/users")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
 getUserr(username: string): Observable<User[]> {
      // search url
    const searchUrl = `${this.baseUrl}/search/findByUsername?username=${username}`;

    return this.httpClient.get<GetResponseUser>(searchUrl).pipe(
      map(response => response._embedded.users)
    );
  }


 


  getlogin(username: string,password:string): Observable<User[]> {
    // search url
  const searchUrl = `${this.baseUrl}/search/findByUsername?username=${username}&&findByPassword?password=${password}`;

  return this.httpClient.get<GetResponseUser>(searchUrl).pipe(
    map(response => response._embedded.users)
  );
}


 createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseUrlController}`, user);
  }
 


}


interface GetResponseUser {
  _embedded: {
    users: User[];
  }}

