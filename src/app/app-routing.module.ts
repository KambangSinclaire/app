import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ChatComponent } from './chat/chat.component';
import { StatusComponent } from './status/status.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [

  {
path: '',
redirectTo: 'login',
pathMatch: 'full'
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
path: 'chat',
canActivate: [ AuthenticationGuard ],
component: ChatComponent
  },
  {
    path: 'status',
    canActivate: [ AuthenticationGuard ],
    component: StatusComponent
  },
  {
    path: 'info',
    canActivate: [ AuthenticationGuard ],
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
