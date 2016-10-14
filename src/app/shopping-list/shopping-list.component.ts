import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient';
import { ShoppingService } from './shopping.service';

@Component({
	selector: 'rb-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: [],
})
export class ShoppingListComponent implements OnInit {
	ingredients: Ingredient[] = [];

	constructor(private sls: ShoppingService) { }

	ngOnInit() {
		this.ingredients = this.sls.getItems();
	}

}
