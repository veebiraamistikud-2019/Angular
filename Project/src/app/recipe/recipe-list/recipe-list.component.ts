import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.module'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('Steak', 'This is test description'),
    new Recipe('Rib-eye', 'This is test description')
  ];

  constructor() { }

  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe){
    this.theRecipe.emit(recipe);
  }

}
