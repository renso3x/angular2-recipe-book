import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
	selector: 'rb-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
	private subscription: Subscription;//prevent from memory leak...
	id: string;

	constructor(private router: Router, private activeRoute: ActivatedRoute) { 
		//listen to the params in routing
		//param type of (any) kind of variable ex. string, integer, boolean...
		this.subscription = this.activeRoute.params.subscribe(
			(param: any) => this.id = param['id']
		);

	}

	ngOnInit() {
	}

	//prevent from memory leak...
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	onNavigate() {
		this.router.navigate(['user'], {queryParams: {'user': 1}});
	}
}
