import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/Interfaces/Users/new-user';
import { LoginService } from 'src/app/Services/UserServices/login.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username: string;
  firstName: string;
  lastName: string;
  address: string;
  alias: string;
  password: string;
  Cpassword: string;
  dateOfBirth: string;
  phone: number;
  users: NewUser[] = [];
  user: NewUser;
  constructor(private signUp: LoginService) { }


  // Getting list of users from the Database
  getUsers() {
    this.signUp.getUsersHandler()
      .subscribe(users => this.users = users);
  }

  // Adding a new user into the system
  addUser(e: any) {
    e.preventDefault();
    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      alias: this.alias,
      address: this.address,
      phone: this.phone,
      password: this.password,
      dateOfBirth: this.dateOfBirth
    };
    this.signUp.createUser(newUser)
      .subscribe(user => this.user = user);
    this.users.push(this.user);

    // Calling getusers method
    this.getUsers();
    console.log(this.users);
  }

  // Deleting a user from the system
  deleteUser(_id) {
    this.signUp.deleteUser(_id)
      .subscribe(res => {
        console.log(res);
      });

  }



  ngOnInit() {
  }

}
