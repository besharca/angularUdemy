import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingServices } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f')
  form: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  ingredientIndex: number;

  constructor(private shopServ: ShoppingServices) {

  }

  ngOnInit() {
    this.subscription =
      this.shopServ.editedIngredient.subscribe((value: number) => {
        this.editMode = true;
        this.ingredientIndex = value;
        this.form.setValue({
          'name': this.shopServ.ingredients[value].name,
          'amount': this.shopServ.ingredients[value].amount
        });
      })

  }

  add() {
    if (this.form.value.name && this.form.value.amount) {
      if (this.editMode) {
        this.shopServ.ingredients[this.ingredientIndex]
          = new Ingredient(this.form.value.name, this.form.value.amount);
        this.form.reset({
          'name': "",
          'amount': '1'
        })
        this.editMode = false;
      } else {
        this.shopServ.ingredients
          .push(new Ingredient(this.form.value.name, this.form.value.amount))
        this.form.reset({
          'name': "",
          'amount': '1'
        })
      }
    }
  }

  clear() {
    this.form.reset({
      'name': "",
      'amount': '1'
    });
    this.editMode = false;
  }

  delete() {
    if (this.editMode) {
      this.shopServ.ingredients.splice(this.ingredientIndex, 1);
      this.editMode = false;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
