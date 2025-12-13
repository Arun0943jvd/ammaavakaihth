import { CartComponent } from './cart/cart';
import { ContactInfoComponent } from './contact-info/contact-info';
import { ReviewComponent } from './review/review';
import { SweetsComponent } from './sweets/sweets';
import { SnacksComponent } from './snacks/snacks';
import { PowdersComponent } from './powders/powders';
import { PickelsComponent } from './pickels/pickels';
import { DryfoodComponent } from './dryitems/dryitems';
import { DashboardComponent } from './dashboard/dashboard';
import { ConfirmationComponent } from './confirmation/confirmation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dryfood', component: DryfoodComponent },
  { path: 'pickels', component: PickelsComponent },
  { path: 'powders', component: PowdersComponent },
  { path: 'snacks', component: SnacksComponent },
  { path: 'sweets', component: SweetsComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'contact', component: ContactInfoComponent },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart').then((m) => m.CartComponent),
  },

  { path: 'confirmation', component: ConfirmationComponent },
];
