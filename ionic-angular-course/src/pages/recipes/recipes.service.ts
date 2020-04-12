import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable ({
  providedIn: 'root'
})

export class RecipesService {

    private recipes: Recipe[] = [
      {
        id: 'r1',
        title: 'Chy',
        imageUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        ingredients: ['French Fries', 'Pork Meat', 'Salad']
      },
      {
        id: 'r2',
        title: 'Spaghetti',
        imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
        ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
      },
    ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
}
