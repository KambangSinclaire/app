import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import { Material} from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NavigationComponent } from './navigation/navigation.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';
import { InfoComponent } from './info/info.component';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationGuard } from './authentication.guard';

const config: SocketIoConfig = { url : 'http://localhost:4000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ChatComponent,
    LoginComponent,
    StatusComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    Material,
    HttpClientModule
  ],
  providers: [LoginService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
