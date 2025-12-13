import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private alertSubject = new Subject<{ message: string; type: string }>();
  alert$ = this.alertSubject.asObservable();

  show(message: string, type: 'success' | 'danger' | 'warning' | 'info' = 'success') {
    this.alertSubject.next({ message, type });
  }
}
