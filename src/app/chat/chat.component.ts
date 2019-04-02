import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public username = 'sume';
  public showSpinner = false;
  public data;
  public Output = document.querySelector('.output');
  public messages = [];
  message;

signOut() {
this.showSpinner = true;
setTimeout( () => {
this.showSpinner = false;
this.loginService.setUserLogOut();
this.router.navigate(['/login']);
}, 1000);
}

  constructor(private loginService: LoginService,
              private router: Router,
              private socket: Socket) { }

  ngOnInit() {
    if ( !this.loginService.loggedIn ) {
      this.username = 'LIA';
    } else {
    this.username = 'Eng ' + this.loginService.username;
  }
}


sendMsg(e) {
  e.preventDefault();

  $('document').ready( () => {
    $('.output').show();
    this.data = $('textarea').val();
    if (this.data.length < 1) {
      alert('Empty field cannot be submitted ');
      return;
    }
    console.log(this.data);
    const data = this.data;
    // const textarea = document.querySelector('textarea');
    // textarea.innerHTML = ' ';
    const user = this.username;
    this.socket.emit('message', { user, data  } );
  });
  this.printMessage();
  this.keyMethod();
  this.typingMethod();
  this.displayAllMessages();
}

keyMethod() {
  $('document').ready( () => {
    $('textarea').keypress( () => {
      this.socket.emit('typing', this.username);
    });
   });
}

printMessage() {
  $('document').ready( () => {
    this.socket.on('message', (data) => {
      $('.typing').html('');
      $('.output').html(`<p style="font-size:20px; text-align:center;" ><strong>${data.user} :</strong> ${data.data}</p>`);
      this.messages.push(data.user);
      this.messages.push(data.data);
    });
  });
}

typingMethod() {
  $('document').ready( () => {
    this.socket.on('typing', (user) => {
      $('.typing').html( user + ' is typing');
    });
  });
}

displayAllMessages() {
  // loop through the array
  for ( let i = 0 ; i < this.messages.length ; i++) {
const Name = this.messages[0];
const Message = this.messages[1];
$('.displayAllMessage').html(Name);
$('.displayAllMessage').html(Message);
}
}
} // End of the main class

