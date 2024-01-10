import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {NotificationResponse} from "../notification";
import {PermissionService} from "../permission.service";
import {NotificationService} from "../notification.service";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    MatButtonModule
  ],
  providers: [PermissionService, NotificationService],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.sass'
})
export class NotificationsComponent implements OnInit {
  notifications: NotificationResponse[] = []

  constructor(private permissionService: PermissionService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.updateNotifications()
  }

  updateNotifications() {
    if (this.permissionService.isUserSupplier()) {
      this.notificationService.getSupplierNotifications(this.permissionService.getToken()).subscribe(notifications => {
        this.notifications = notifications
      })
    }
    if (this.permissionService.isUserCustomer()) {
      this.notificationService.getCustomerNotifications(this.permissionService.getToken()).subscribe(notifications => {
        this.notifications = notifications
      })
    }
  }

  deleteNotification(notification: NotificationResponse) {
    if (this.permissionService.isUserSupplier()) {
      this.notificationService.deleteSupplierNotification(notification._id, this.permissionService.getToken()).subscribe(notifications => {
        this.updateNotifications()
      })
    }
    if (this.permissionService.isUserCustomer()) {
      this.notificationService.deleteCustomerNotification(notification._id, this.permissionService.getToken()).subscribe(notifications => {
        this.updateNotifications()
      })
    }
  }
}
