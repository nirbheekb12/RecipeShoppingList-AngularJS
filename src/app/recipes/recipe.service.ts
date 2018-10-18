import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[]  = [
    new Recipe('Pizza',
      'A tasty pizza just awesome',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUx8RWua0N0j8rpvSa5-zfOwwmYTm1wrfnUMDHEuRASbYCo1qZeg',
       [
         new Ingredient('Cheese', 1),
         new Ingredient('Paprika', 2),
         new Ingredient('Onion', 1),
         new Ingredient('Paneer', 1)

       ]),
    new Recipe('Burger',
      'What else you need to say?',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxoXWZEj47Vln9FFkRV_anOoz-fPPcGTGJ0Z-kJo4LggRpo2yuA',
       [
         new Ingredient('Buns', 2),
         new Ingredient('Meat', 1)
       ])
  ];
   constructor(private slService: ShoppingListService) {
   }

  getRecipes() {
    // since slice returns a new array, we return a copy of the originial recipes array
    return this.recipes.slice();
  }

  getRecipe(index: number) {
     return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
         this.slService.addIngredients(ingredients);
  }

}
