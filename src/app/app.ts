import { AlertNotification } from './alert-notification/alert-notification';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, HeaderComponent, FooterComponent, AlertNotification],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'AmmaavakiH2H';
}
