import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { USER_ROUTE } from './user/user.route';
import { RECIPE_ROUTE } from './recipes/recipes.route';

const APP_ROUTE: Routes = [
	//redirecting to home when not supplying corret url path
	{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
	{ path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTE },
	{ path: 'shopping-list', component: ShoppingListComponent },
	
	// { path: 'user', component: UserComponent },
	// { path: 'user', component: UserComponent, children: USER_ROUTE},
	// { path: 'profile/:id', component: ProfileComponent },
];

export const Routing = RouterModule.forRoot(APP_ROUTE);