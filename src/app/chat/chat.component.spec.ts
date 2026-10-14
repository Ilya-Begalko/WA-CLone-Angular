import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('conversation', {
      name: 'Andrey',
      latestMessage: 'Hello world',
      messages: [{ id: 1, body: 'Hello world', time: '8:21', me: true }],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a submitted message to the top of the conversation', () => {
    component.submitMessage({ target: { value: '  New message  ' } });

    expect(component.conversation.messages[0].body).toBe('New message');
    expect(component.conversation.latestMessage).toBe('New message');
  });

  it('should ignore empty messages', () => {
    expect(component.submitMessage({ target: { value: '   ' } })).toBe(false);
    expect(component.conversation.messages.length).toBe(1);
  });
});
