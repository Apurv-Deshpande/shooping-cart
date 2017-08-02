import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is simply a test', 'http://images.media-allrecipes.com/userphotos/250x250/00/93/15/931547.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
