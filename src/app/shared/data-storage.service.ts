// import { AuthService } from './../auth/auth.service';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Recipe } from './../recipes/recipe.model';
// import { map, tap } from 'rxjs/operators';
// import { Store } from '@ngrx/store';
// import * as fromApp from '../store/app.reducer';
// import * as RecipesActions from '../recipes/store/recipe.actions';

// @Injectable({ providedIn: 'root' })
// export class DataStorageService {
//   constructor(
//     private http: HttpClient,
//     private store: Store<fromApp.AppState>,
//     private authService: AuthService
//   ) {}

//   storeRecipes() {
//     const recipe = this.recipesService.getRecipes();
//     this.http
//       .put(
//         'https://ng-course-recipe-book-46bef.firebaseio.com/recipes.json',
//         recipe
//       )
//       .subscribe(response => {
//         console.log(response);
//       });
//   }

//   fetchRecipes() {
//     return this.http
//       .get<Recipe[]>(
//         'https://ng-course-recipe-book-46bef.firebaseio.com/recipes.json'
//       )
//       .pipe(
//         map(recipes => {
//           return recipes.map(recipe => {
//             return {
//               ...recipe,
//               ingredients: recipe.ingredients ? recipe.ingredients : []
//             };
//           });
//         }),
//         tap(recipes => {
//           // this.recipesService.setRecipes(recipes);
//           this.store.dispatch(RecipesActions.setRecipes({ recipes }));
//         })
//       );
//   }
// }
