import { Component,  OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeThatSelected = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('Chicken Biryani', 'Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice. For my Biryani, I simplify the order of operations, while retaining the traditional layered approach to assembling it.', 'https://geekrobocook.com/wp-content/uploads/2021/05/Muradabadi-chicken-biryani-1200x900.jpg'),
    new Recipe('Chicken Haka noodles', 'Chicken noodles are a delicious flavor packed meal of stir fried noodles, chicken, vegetables and sauces. Made in Chinese Hakka Style!', 'https://www.licious.in/blog/wp-content/uploads/2020/12/Sesame-Chicken-Noodles.jpg'),
    new Recipe('Veg Biryani', 'This Veg Biryani is an authentic Indian vegetarian recipe packed full of your favorite rice, veggies, and spices. Made with patience and lots of love, this delicious veg dum biryani requires both care and attention to detail. The savory flavors in your first bite are well worth the time and effort spent in the kitchen.', 'https://thumbs.dreamstime.com/b/traditional-hyderabadi-vegetable-veg-dum-biryani-mixed-veggies-served-raita-selective-focus-223723116.jpg'),
    new Recipe('Kerala Chicken Roast','A crisp fried chicken recipe from Gods own country. A family favorite, serve with a generous squeeze of lime. This roasted chicken could be used as a starter for your festival parties and trust it to be the super-hero of your party.','https://c.ndtvimg.com/2019-12/5f6fg0l8_keraal-roast-chicken_625x300_14_December_19.jpg')
  ];

  constructor() { }
  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe){
    this.recipeThatSelected.emit(recipe);
  }
  

}
