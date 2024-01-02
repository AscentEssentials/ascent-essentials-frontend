import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.sass'
})
export class NotificationsComponent {
  notifications: Notification[] = [
    {
      message: "test",
      timestamp: new Date()
    }
  ]

  addNotification(message: string) {
    const notification: Notification = { message, timestamp: new Date() }
    this.notifications.unshift(notification)
  }
}

interface Notification {
  message: string;
  timestamp: Date;
}
