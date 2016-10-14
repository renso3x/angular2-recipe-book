import { Component, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
	selector: 'rb-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnDestroy {
	private subscription: Subscription;
	params: string;

	constructor(private router: Router) {
		this.subscription = router.routerState.root.queryParams.subscribe(
			(query: any) => this.params = query['user']
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
