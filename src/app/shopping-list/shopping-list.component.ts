import { LoggingService } from './../logging.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridients: Ingredient[];
  private ingredientChangedSub: Subscription;

  constructor(private shoppingListService: ShoppingListService, private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.ingridients = this.shoppingListService.getIngredients();
    this.ingredientChangedSub = this.shoppingListService.ingredientChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingridients = ingredients;
    });

    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit');
  }

  onEditEditem(index: number) {
    this.shoppingListService.startEditing.next(index);
  }

  ngOnDestroy() {
    this.ingredientChangedSub.unsubscribe();
  }
}
