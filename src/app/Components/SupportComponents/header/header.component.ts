import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchSpace: boolean = false;
  tabLinks = [
    {
      path: 'chat',
      label: 'chat'

    },
    {
      path: 'status',
      label: 'status'

    },
    {
      path: 'calls',
      label: 'Calls'

    },
    {
      path: 'info',
      label: 'Vibes'

    },
  ];

  constructor(private router: Router) { }

  chat() {
    this.router.navigate['chat'];
  }
  status() {

  }
  info() {
    this.router.navigate['status'];
  }

  ngOnInit() {
  }
  showSearchSpace() {
    return this.searchSpace = true;
  }
  closeSearchBar() {
    return this.searchSpace = false;
  }
}
