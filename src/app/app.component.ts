import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ChatComponent } from './chat/chat.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, ChatComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  conversation: any;

  onConversationSelected(conversation: any) {
    this.conversation = conversation;
  }
}
