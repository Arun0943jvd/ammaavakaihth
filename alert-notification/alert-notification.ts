import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-alert-notification',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './alert-notification.html',
  styleUrl: './alert-notification.scss',
})
export class AlertNotification {
  alert: { message: string; type: string } | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.alert$.subscribe((alert) => {
      this.alert = alert;
      setTimeout(() => (this.alert = null), 3000); // auto hide
    });
  }

  close() {
    this.alert = null;
  }
}
