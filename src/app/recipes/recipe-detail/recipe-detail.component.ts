import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../recipe';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'rb-recipe-detail',
	templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
	private subscription: Subscription;
	private recipeIndex: number;

	@Input() selectedRecipe: Recipe;

	constructor(
		private sls: ShoppingService, 
		private router: Router,
		private activeRouter: ActivatedRoute,
		private recipeService: RecipeService
	) { 
		
	}

	ngOnInit() {
		this.subscription = this.activeRouter.params.subscribe(
			(params: any) =>  {
				this.recipeIndex = params['id']; //get the params id
				// and get the recipe assign it to the selected recipe
				this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
			}
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	addToShoppingList() {
		// console.log(this.selectedRecipe.ingredient);
		this.sls.addItems(this.selectedRecipe.ingredient);
	}

	onEdit() {
		this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
	}

	onDelete() {
		this.recipeService.deleteRecipe(this.selectedRecipe);
		// this.router.navigate(['/recipes']);
	}
}
