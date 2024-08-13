import { Component, EventEmitter, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-avatars',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './avatars.component.html',
  styleUrl: './avatars.component.scss'
})
export class AvatarsComponent {
  @Output() getAvatar = new EventEmitter<string>();
  avatars: string[] = [
    'gamer.png',
    'human.png',
    'man.png',
    'man-2.png',
    'man-3.png',
    'profile.png',
    'user.png',
    'user-2.png',
    'user-3.png',
    'woman.png'
  ];

  onSelect(avatar: string) {
    this.getAvatar.emit(avatar);
  }
}
