import { SuggestionsService } from './../../services/suggestions.service';
import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { Router } from '@angular/router';
import { Ingredient } from '../../models/ingredient';
import { Suggestion } from '../../models/suggestion';



@Component({
  selector: 'app-creation-pizza',
  templateUrl: './creation-pizza.component.html',
  styleUrls: ['./creation-pizza.component.scss']
})
export class CreationPizzaComponent implements OnInit {

  ingredients: any;
  suggestions: any;

  constructor(private ingredientService: IngredientService, private suggestionService: SuggestionsService, private router: Router) { }



  ngOnInit() {
    this.ingredientService.getIngredient().subscribe((reponse) => {
      //  console.log(reponse);
      this.ingredients = reponse;
    },
      error => console.log(error)
    );

    this.suggestionService.getSuggestions().subscribe((reponse) => {
      this.suggestions = reponse;
    },
      error => console.log(error)
    );


  }
}
