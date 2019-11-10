import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipe.module'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe: Recipes[] = [new Recipes
    ('Steak', 'This is test description', 'https://moodysbutchershop.com/wp-content/uploads/2017/09/Ribeye-on-Platter.jpg'),
    new Recipes
    ('Rib-eye', 'This is test description', 'https://moodysbutchershop.com/wp-content/uploads/2017/09/Ribeye-on-Platter.jpg')
  
  ];

  constructor() { }

  ngOnInit() {
  }

}
