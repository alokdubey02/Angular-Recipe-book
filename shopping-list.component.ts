import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Milk Shake  ', 275),
    new Ingredient('Smoothee  ', 100),
    new Ingredient('Desert  ', 250),
    new Ingredient('Soft Drink  ', 150),
  ];
  ingredient: any;

  onIngredientAdded(ingredients: Ingredient){
    this.ingredients.push(ingredients);
  }
  del(ingredients: Ingredient)
  {
    const pos = this.ingredients.indexOf(ingredients);
    this.ingredients.splice(pos, pos + 1);
  }
  constructor() {}

  ngOnInit(): void {}
}
