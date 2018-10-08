import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();

   recipes: Recipe[]  = [
     new Recipe('A Test Recipe',
        'This is simply a test',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZ-5zBNcA3GiViSLw_ScXvr5NNdTQ1KLP3tgLAyOsCn-NnZK0bA'),
     new Recipe('Another Test Recipe',
       'This is simply a test',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZ-5zBNcA3GiViSLw_ScXvr5NNdTQ1KLP3tgLAyOsCn-NnZK0bA')
   ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
     this.recipeWasSelected.emit(recipe);

  }
}
