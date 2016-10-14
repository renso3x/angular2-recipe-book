import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
		new Recipe('Humba', 'Filipino food that is a pig', 'http://panlasangpinoy.com/wp-content/uploads/2010/01/HumbaFront1.jpg', [
			new Ingredient('French Fries', '2'),
			new Ingredient('Mach Potato', '100')
		]),
		new Recipe('Leche flan', 'yummy sweet', 'http://cathy.snydle.com/files/2013/05/filipino-food.jpg', []),
		new Recipe('Halo halo', 'tasty', 'http://www.sanpablocity.com.ph/wp-content/uploads/2011/04/halohalo.jpg', [])
	];

	constructor() { }

	getRecipes() {
		return this.recipes;
	}

	getRecipe(id: number) {
		console.log(this.recipes[id]); 
		return this.recipes[id];
	}

	deleteRecipe(recipe: Recipe) {
		this.recipes.splice(this.recipes.indexOf(recipe), 1);
	}
}
