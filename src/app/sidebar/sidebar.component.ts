import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  conversations = [
    { name: 'Andrey', time: '8:21', latestMessage: 'Hello!', latestMessageRead: false },
    { name: 'Ilon Mask', time: '9:23', latestMessage: 'I bought a Twitter', latestMessageRead: false },
    { name: 'SHREK', time: '11:43', latestMessage: 'Somebody...', latestMessageRead: false },
    { name: 'Vlad', time: '6:01', latestMessage: 'Good Morning!', latestMessageRead: true },
    { name: 'Spider-Man', time: '5:00', latestMessage: 'I need a support!', latestMessageRead: true },
    { name: 'Igor', time: '9:30', latestMessage: 'OOO POKOLOKO', latestMessageRead: true },
    { name: 'Toni Slark', time: '2:20', latestMessage: 'RENAME ME!', latestMessageRead: false }
  ];

  constructor() {}

  ngOnInit(): void {}
}
