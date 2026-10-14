import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter conversations by name and latest message', () => {
    component.searchText = 'shrek';
    expect(component.filteredConversations.map((c) => c.name)).toEqual(['SHREK']);

    component.searchText = 'morning';
    expect(component.filteredConversations.map((c) => c.name)).toEqual(['Kong', 'Rock']);
  });
});
