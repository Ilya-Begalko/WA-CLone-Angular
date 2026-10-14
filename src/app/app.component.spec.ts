import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  async function render() {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    return { fixture, compiled: fixture.nativeElement as HTMLElement };
  }

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the placeholder when no conversation is selected', async () => {
    const { compiled } = await render();
    expect(compiled.querySelector('#chatPlaceholder h2')?.textContent).toContain('Keep your phone connected');
    expect(compiled.querySelector('app-chat')).toBeNull();
  });

  it('should open the selected conversation, update its preview and close it on back', async () => {
    const { fixture, compiled } = await render();

    compiled.querySelector<HTMLElement>('.conversation')!.click();
    await fixture.whenStable();
    expect(compiled.querySelector('#chatContainer')!.classList).toContain('chatOpen');
    expect(compiled.querySelector('app-chat .nameSection')?.textContent).toContain('Andrey');

    const textarea = compiled.querySelector<HTMLTextAreaElement>('#textarea textarea')!;
    textarea.value = 'New message';
    textarea.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    await fixture.whenStable();
    expect(compiled.querySelector('.conversation .message')?.textContent).toContain('New message');

    compiled.querySelector<HTMLElement>('.backButton')!.click();
    await fixture.whenStable();
    expect(compiled.querySelector('app-chat')).toBeNull();
  });
});
