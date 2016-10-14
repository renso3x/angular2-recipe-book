import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../../recipe';
import { RecipeService } from '../../recipe.service';

@Component({
	selector: 'rb-recipe-item',
	templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent implements OnInit {
	private subscription: Subscription;
	@Input() recipe:Recipe;
	@Input() recipeId: number;

	constructor(
		private router: Router, 
		private activeRoute: ActivatedRoute,
		private recipesService: RecipeService
	) { 
		this.subscription = this.activeRoute.params.subscribe(
			(params: any) => this.recipeId = params['id']
		);
	}

	ngOnInit() {
	}

	
}
 