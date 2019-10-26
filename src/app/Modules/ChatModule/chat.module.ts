import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../MaterialModule/material.module';
import { ChatroomComponent } from '../../Components/ChatComponents/chatroom/chatroom.component';
import { GroupchatsComponent } from '../../Components/ChatComponents/groupchats/groupchats.component';
import { PrivatechatsComponent } from '../../Components/ChatComponents/privatechats/privatechats.component';
import { SupportModule } from '../SupportModule/support.module';

@NgModule({
  declarations: [ChatroomComponent, GroupchatsComponent, PrivatechatsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SupportModule
  ],
  exports: [
    ChatroomComponent, GroupchatsComponent, PrivatechatsComponent
  ]
})
export class ChatModule { }
