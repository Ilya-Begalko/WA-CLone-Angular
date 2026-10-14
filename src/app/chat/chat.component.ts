import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';

@Component({
  selector: 'app-chat',
  imports: [NgClass, FormsModule, PickerComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  @Input() conversation: any;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @Output() back: EventEmitter<void> = new EventEmitter();

  emojiPickerVisible: any;
  message = '';

  submitMessage(event: any) {
    let value = event.target.value.trim();
    this.message = '';
    
    if (value.length < 1) return false;
    
    this.conversation.latestMessage = value;
    
    this.conversation.messages.unshift({
      id: 1,
      body: value,
      time: '10:21',
      me: true,
    });

    return true;
  }

  emojiClicked(event: any) {
    this.message += event.emoji.native;
  }
}
