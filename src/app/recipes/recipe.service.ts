import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Bacalhau à Brás',
      'Melhor bacalhau!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bacalhau_a_Bras.jpg/800px-Bacalhau_a_Bras.jpg',
      [
        new Ingredient('Codfish', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Hamburguer',
      'Deliciooooous',
      'https://cdn.pixabay.com/photo/2019/01/21/12/47/burger-3946012_960_720.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.andIngredients(ingredients);
  }
}
