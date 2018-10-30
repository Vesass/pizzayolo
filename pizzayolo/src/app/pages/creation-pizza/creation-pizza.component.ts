import { SuggestionsService } from './../../services/suggestions.service';
import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { Router } from '@angular/router';
import { Ingredient } from '../../models/ingredient';
import { Suggestion } from '../../models/suggestion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-creation-pizza',
  templateUrl: './creation-pizza.component.html',
  styleUrls: ['./creation-pizza.component.scss']
})
export class CreationPizzaComponent implements OnInit {

  ingredients: any;
  suggestions: any;
  IsChecked:boolean;
  IsIndeterminate:boolean;
  LabelAlign:string;
  IsDisabled:boolean;

  constructor(private ingredientService: IngredientService, private suggestionService: SuggestionsService,private router: Router) {
      this.IsChecked =false;
      this.IsIndeterminate =false;
      this.LabelAlign ='after';
      this.IsDisabled =false; }


  ngOnInit() {
    this.ingredientService.getIngredient().subscribe((reponse) => {
       console.log(reponse);
      this.ingredients = reponse;
    },
      error => console.log(error)
    )}
}


// Si click sur ingredient
// vérifier dans quelles pizzas de la collection suggestions se trouve-t-il
// puis fait apparaitre les ingredients de ces pizzas
