import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveChatComponent } from './live-chat/live-chat.component';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {environment} from '../../../environments/environment';

const config: SocketIoConfig = { url: environment.chatip, options: {} };


@NgModule({
  declarations: [LiveChatComponent],
  imports: [
    CommonModule,
    SocketIoModule.forRoot(config),
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FlexModule,
  ]
})
export class LiveChatModule {}
