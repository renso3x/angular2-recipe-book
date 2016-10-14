import { Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { AccountComponent } from './account/account.component';

export const USER_ROUTE: Routes = [
	{ path: 'details', component: DetailsComponent },
	{ path: 'account', component: AccountComponent }
];
