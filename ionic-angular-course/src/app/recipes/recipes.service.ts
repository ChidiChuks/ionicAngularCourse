import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Shawarma',
      imageUrl: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/owk_3069_chicken_shawarma_horizontal_1.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-spaghetti-and-meatballs_H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1567536801362.jpeg',
      ingredients: ['Spaghetti', 'Meat', 'Tomantoes']
    },
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  } 
}
