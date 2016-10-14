import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient';

@Injectable()
export class ShoppingService {
	private ingredients: Ingredient[] = [];
	constructor() { }

	getItems() {
		return this.ingredients;
	}

	addItems(items: Ingredient[]) {
		Array.prototype.push.apply(this.ingredients, items);
	}
}
