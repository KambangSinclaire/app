import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Operator } from 'rxjs';
import { map } from 'rxjs/operators';

import { AllUsers } from '../../Interfaces/Users/all-users';
import { NewUser } from '../../Interfaces/Users/new-user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn;
  public username;
  newuser: NewUser;

  private url = '/assets/server/users2.json';
  private url2 = 'http://localhost:4000/lia/techgenesis/api/user/signup';
  private url3 = 'http://localhost:4000/lia/techgenesis/api/users';
  private Url = 'http://localhost:4000/lia/techgenesis/api';

  constructor(private http: HttpClient) {
    this.loggedIn = JSON.parse(localStorage.getItem('LoggedIn') || 'false');
    this.username = localStorage.getItem('name');
  }
  getUsers(): Observable<AllUsers[]> {
    return this.http.get<AllUsers[]>(this.url);
  }


  /**
   * Adding a new user into the database
   */
  createUser(newUser): Observable<NewUser> {
    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<NewUser>(this.url2, newUser, headerOptions);
  }


  /**Getting all users in the database
   */
  getUsersHandler(): Observable<NewUser[]> {
    return this.http.get<NewUser[]>(this.url3);
  }

  // updateUser(): Observable<NewUser> {
  //   return this.http.put<NewUser>()
  // }

  /*
  Deleting a User from the Database
  */
  deleteUser(id: any) {
    return this.http.delete(`${this.Url}/users/${id}`);
  }

  // Setting User to LogIn state
  setUserLogin(name) {
    this.loggedIn = true;
    localStorage.setItem('LoggedIn', this.loggedIn);
    localStorage.setItem('name', name.toString());
  }

  // Setting User to Logout state
  setUserLogOut() {
    this.loggedIn = false;
    localStorage.clear();
  }

  // Verifying if user is logged in
  getUserIsLogged(): boolean {
    return JSON.parse(localStorage.getItem('LoggedIn') || 'false');
  }


}
