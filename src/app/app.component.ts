import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  conversation: any;

  onConversationSelected(conversation: any) {
    this.conversation = conversation;
  }
}
