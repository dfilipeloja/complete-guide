import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingridients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingridients = ingredients;
    });
  }
}
