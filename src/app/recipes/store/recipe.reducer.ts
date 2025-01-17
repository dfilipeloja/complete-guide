import { Action, createReducer, on } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import * as RecipesActions from '../store/recipe.actions';

export interface State {
  recipes: Recipe[];
}
const initialState: State = { recipes: [] };

export function recipeReducer(
  recipeState: State | undefined,
  recipeAction: Action
) {
  return createReducer(
    initialState,
    on(RecipesActions.addRecipe, (state, action) => ({
      ...state,
      recipes: state.recipes.concat({ ...action.recipe })
    })),
    on(RecipesActions.updateRecipe, (state, action) => ({
      ...state,
      recipes: state.recipes.map((recipe, index) =>
        index === action.index ? { ...action.recipe } : recipe
      )
    })),
    on(RecipesActions.deleteRecipe, (state, action) => ({
      ...state,
      recipes: state.recipes.filter((recipe, index) => index !== action.index)
    })),
    on(RecipesActions.setRecipes, (state, action) => ({
      ...state,
      recipes: [...action.recipes]
    }))
  )(recipeState, recipeAction);
}

// OLD SYNTAX

// import { Recipe } from './../recipe.model';
// import * as RecipesActions from './recipe.actions';

// export interface State {
//   recipes: Recipe[];
// }

// const initialState: State = {
//   recipes: []
// };

// export function recipeReducer(state = initialState, action: RecipesActions.RecipesActions) {
//   switch (action.type) {
//     case RecipesActions.SET_RECIPES:
//       return {
//         ...state,
//         recipes: [...action.payload]
//       };

//     case RecipesActions.ADD_RECIPE:
//       return {
//         ...state,
//         recipes: [...state.recipes, action.payload]
//       };

//     case RecipesActions.UPDATE_RECIPE:
//       const updatedRecipe = {
//         ...state.recipes[action.payload.index],
//         ...action.payload.newRecipe
//        };

//       const updatedRecipes = [...state.recipes];
//       updatedRecipes[action.payload.index] = updatedRecipe;

//       return {
//         ...state,
//         recipes: updatedRecipes
//       };

//     case RecipesActions.DELETE_RECIPE:
//       return {
//         ...state,
//         recipes: state.recipes.filter((recipe, index) => index !== action.payload)
//       };

//     default:
//       return state;
//   }
// }
