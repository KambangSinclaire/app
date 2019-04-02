import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUser } from './getAUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public loggedIn;
public username;
 private url = '/assets/server/users2.json';

 constructor(private http: HttpClient) {
   this.loggedIn = JSON.parse(localStorage.getItem('LoggedIn') || 'false');
   this.username =  localStorage.getItem('name');
 }

getUsers(): Observable<AUser[]> {
  return this.http.get<AUser[]>(this.url);
}

setUserLogin(name) {
  this.loggedIn = true;
  localStorage.setItem('LoggedIn', this.loggedIn);
  localStorage.setItem('name', name.toString());
}

setUserLogOut() {
  this.loggedIn = false;
  localStorage.clear();
}


getUserIsLogged(): boolean {
  return JSON.parse(localStorage.getItem('LoggedIn') || 'false');
}


}
