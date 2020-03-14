import { Ingredient } from '../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingridients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients(): Ingredient[] {
        return this.ingridients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingridients.push(ingredient);
        this.ingredientChanged.emit(this.ingridients.slice());
    }

    andIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingridients.push(...ingredients);
        this.ingredientChanged.emit(this.ingridients.slice());
    }
}
