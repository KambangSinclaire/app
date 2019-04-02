import { Component } from '@angular/core';
import { Socket} from 'ngx-socket-io';
import { from } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'liachat';
  constructor( private socket: Socket) {
  }

}
