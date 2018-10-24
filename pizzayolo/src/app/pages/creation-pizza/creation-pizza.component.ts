import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service'
import { Router } from '@angular/router';
import { Ingredient } from '../../models/ingredient';



@Component({
  selector: 'app-creation-pizza',
  templateUrl: './creation-pizza.component.html',
  styleUrls: ['./creation-pizza.component.scss']
})
export class CreationPizzaComponent implements OnInit {

  ingredients : Ingredient[];

  constructor(private ingredientService: IngredientService, private router: Router) { }

  ngOnInit()
  {    
    this.ingredientService.getIngredient()
  }
  
  // ingredientInventaire(){
    // this.ingredientService.getIngredient()
    //.subscribe((data:Ingredient[]) =>this.ingredients = data)
 // } 
}
