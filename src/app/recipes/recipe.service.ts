import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipes',
      'This is a test recipe',
      'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1370&q=80',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Frech frieds', 20)
      ]),
    new Recipe('A test recipes',
      'This is a test recipe',
      'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1370&q=80',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat one', 40)
      ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
