import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {PushNotificationsService} from "./push-notifications.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PermissionService} from "./permission.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  providers: [Router, PushNotificationsService, PermissionService]
})
export class AppComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private pushNotificationsService: PushNotificationsService, private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.pushNotificationsService.connect()
    this.pushNotificationsService.login(this.permissionService.getToken())
    this.pushNotificationsService.eventObservable('new-notification').subscribe(message => {
      this.snackBar.open(`New notification: ${message.message}}`, 'Close', {
        duration: 5000,
        verticalPosition: 'bottom',
        panelClass: ['custom-snackbar']
      })
    })
  }
}
