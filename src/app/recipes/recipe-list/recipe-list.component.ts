import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'rb-recipe-list',
	templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];

	@Output() selectedRecipe = new EventEmitter<Recipe>();

	// inject your service here...
	constructor(private recipeService:RecipeService) { }

	ngOnInit() {
		this.recipes = this.recipeService.getRecipes();
	}

	onSelected(recipe: Recipe) {
		this.selectedRecipe.emit(recipe);
	}

}
