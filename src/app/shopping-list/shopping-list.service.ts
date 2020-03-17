import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();

    private ingridients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients(): Ingredient[] {
        return this.ingridients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingridients.push(ingredient);
        this.ingredientChanged.next(this.ingridients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingridients.push(...ingredients);
        this.ingredientChanged.next(this.ingridients.slice());
    }
}
