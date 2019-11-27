import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-my-recipe',
  templateUrl: './new-my-recipe.component.html',
  styleUrls: ['./new-my-recipe.component.css']
})
export class NewMyRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newForm:FormGroup = new FormGroup({
    recipeName: new FormControl('name'),
    recipeImages: new FormArray([
        new FormControl('www.somethidng'),
        new FormControl('www.somethidng else')
    ]),
    recipeDescription: new FormControl("descrdddddiption"),
    recipeIngredients: new FormArray([
      new FormGroup({
        ingredient: new FormControl('dog'),
        amount: new FormControl('5'),
      })
    ])
  })

  onSubmit(){ 
    console.log(this.newForm);
    
  }

  addIngredientField(){
    (<FormArray>this.newForm.get('recipeIngredients')).push(new FormGroup({
      ingredient: new FormControl('cat'),
      amount: new FormControl('2'),
    })) 
    
  }

  removeIngredient(i:number){
    (<FormArray>this.newForm.get('recipeIngredients')).removeAt(i);
  }

  removeImage(imgIndex:number){
    (<FormArray>this.newForm.get("recipeImages")).removeAt(imgIndex);
    
    
  }

}
