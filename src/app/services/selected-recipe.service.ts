import { Recipe } from '../recipe/recipe-list-edit/recipe-item/recipe.model';
import { Ingredient } from '../shared/ingredient.model';


export class SelectedRecipe {

    recipes: Recipe[] = []; 
    selectedRecipe:Recipe;
    errorButtonDisable:boolean = false;

    constructor(){
        this.recipes.push(new Recipe("fried potatoes potatoes", "verry yummy",
         "https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg"
         ,[new Ingredient("Potatoes",5), new Ingredient("oil",1)]));
        this.recipes.push(new Recipe("fried potatoes potatoes", "verry yummy",
         "https://www.seriouseats.com/recipes/images/2016/01/20160113-honey-butter-chips-vicky-wasik-7-1500x1125.jpg"
         ,[new Ingredient("Potatoes",5), new Ingredient("oil",1)]));
        this.recipes.push(new Recipe("fried potatoes potatoes", "verry yummy",
         "https://www.seriouseats.com/recipes/images/2016/01/20160113-honey-butter-chips-vicky-wasik-7-1500x1125.jpg"
         ,[new Ingredient("Potatoes",5), new Ingredient("oil",1)]));
        this.recipes.push(new Recipe("fried potatoes potatoes", "verry yummy",
         "https://www.seriouseats.com/recipes/images/2016/01/20160113-honey-butter-chips-vicky-wasik-7-1500x1125.jpg"
         ,[new Ingredient("Potatoes",5), new Ingredient("oil",1)]));
        this.recipes.push(new Recipe("fried potatoes potatoes", "verry yummy",
         "https://www.seriouseats.com/recipes/images/2016/01/20160113-honey-butter-chips-vicky-wasik-7-1500x1125.jpg"
         ,[new Ingredient("Potatoes",5), new Ingredient("oil",1)]));
        this.recipes.push(new Recipe("fried potatoes potatoes", "verry yummy",
         "https://www.seriouseats.com/recipes/images/2016/01/20160113-honey-butter-chips-vicky-wasik-7-1500x1125.jpg"
         ,[new Ingredient("Potatoes",5), new Ingredient("oil",1)]));
        this.recipes.push(new Recipe("fried potatoes potatoes", "verry yummy",
         "https://www.seriouseats.com/recipes/images/2016/01/20160113-honey-butter-chips-vicky-wasik-7-1500x1125.jpg"
         ,[new Ingredient("Potatoes",5), new Ingredient("oil",1)]));
        this.recipes.push(new Recipe("fried potatoes potatoes", "verry yummy",
         "https://www.seriouseats.com/recipes/images/2016/01/20160113-honey-butter-chips-vicky-wasik-7-1500x1125.jpg"
         ,[new Ingredient("Potatoes",5), new Ingredient("oil",1)]));
        this.recipes.push(new Recipe("fried potatoes potatoes", "verry yummy",
         "https://www.seriouseats.com/recipes/images/2016/01/20160113-honey-butter-chips-vicky-wasik-7-1500x1125.jpg"
         ,[new Ingredient("Potatoes",5), new Ingredient("oil",1)]));
        this.recipes.push(new Recipe("fried potatoes potatoes", "verry yummy",
         "https://www.seriouseats.com/recipes/images/2016/01/20160113-honey-butter-chips-vicky-wasik-7-1500x1125.jpg"
         ,[new Ingredient("Potatoes",5), new Ingredient("oil",1)]));
        this.recipes.push(new Recipe("fried chinken", "verry  verry yummy", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3mqaKlRw2Q-NDkze65kR0gK82GPurrkiY5OiB5rxnMkGiyRZ"
        ,[new Ingredient("chicken",1),new Ingredient("flower",1),new Ingredient("oil",1)]));
        this.recipes.push(new Recipe("fried chinken", "verry  verry yummy",
         "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/recipe-image-legacy-id-1074500_11.jpg"
         ,[]));
        this.selectedRecipe = this.recipes[0];
    }

}