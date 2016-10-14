import { Ingredient } from '../shared/ingredient';

export class Recipe {
	constructor(
		public name: string,
		public description: string,
		public image: string,
		public ingredient: Ingredient[]
	){}
}
