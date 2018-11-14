import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { SuggestionsService } from './../../services/suggestions.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-creation-pizza',
  templateUrl: './creation-pizza.component.html',
  styleUrls: ['./creation-pizza.component.scss']
})
export class CreationPizzaComponent implements OnInit {

  ingredients: any;
  suggestions: any;
  selected: any[];
  ingName: any[];
  ingPrice: any;
  suggestion: any[];
  IsCheckedC: boolean;
  IsCheckedT: boolean;
  IsIndeterminate: boolean;
  LabelAlign: string;
  IsDisabled: boolean;
  test: boolean = false;

  constructor(private ingredientService: IngredientService, private suggestionService: SuggestionsService, private router: Router) {
    this.IsCheckedC = false;
    this.IsCheckedT = true;
    this.IsIndeterminate = false;
    this.LabelAlign = 'after';
    this.IsDisabled = false;
    this.selected = [];
    this.ingName = ["Coulis de tomate"];
    this.ingPrice = 5;

  };

  ngOnInit() {
    this.ingredientService.getIngredient().subscribe((reponse) => {
      console.log(reponse);
      this.ingredients = reponse;
    },
      error => console.log(error)
    )

    this.suggestionService.getSuggestions().subscribe((reponse) => {
      console.log(reponse);
      this.suggestions = reponse;
    },
      error => console.log(error)
    )

  }


  //////////////////////// GESTION DU CHANGEMENT DE LA BASE ////////////////////

  OnChangeBase(event) {

    if (event.source.value === "Crème" && event.checked === true) {
      // Quand on clique sur la crème pour cocher la checkbox      

      this.IsCheckedC = event.source._checked;
      this.IsCheckedT = !this.IsCheckedC;
      // Deux IsChecked, un pour les tomates(IsCheckedT), un pour la crème(IsCheckedC)
      // Quand l'un est sélectionné, l'autre est déselectionné.

      this.ingName = this.ingName.filter((ingredient) => { return ingredient !== "Coulis de tomate" })
      // On supprime le coulis de l'array

      this.ingName.unshift("Crème");
      // On supprime la crème de l'array
    }

    else if (event.source.value === "Crème" && event.checked === false) {
      // Quand on clique sur la crème pour décocher la checkbox


      this.IsCheckedC = event.source._checked;
      this.IsCheckedT = !this.IsCheckedC;

      this.ingName.unshift("Coulis de tomate");
      // On ajoute le coulis à l'array

      this.ingName = this.ingName.filter((ingredient) => { return ingredient !== "Crème" })
      // On supprime la crème de l'array
    }

    else if (event.source.value === "Coulis de tomate" && event.checked === true) {
      // Quand on clique sur le coulis pour cocher la checkbox


      this.IsCheckedT = event.source._checked;
      this.IsCheckedC = !this.IsCheckedT;

      this.ingName = this.ingName.filter((ingredient) => { return ingredient !== "Crème" })
      // On supprime la crème de l'array

      this.ingName.unshift("Coulis de tomate");
      // on ajoute le coulis à l'array
    }

    else {
      this.IsCheckedT = event.source._checked;
      this.IsCheckedC = !this.IsCheckedT;

      this.ingName.unshift("Crème");
      // On ajoute crème à notre array

      this.ingName = this.ingName.filter((ingredient) => { return ingredient !== "Coulis de tomate" })


      // On supprime le coulis de l'array
    }


    document.getElementById('ingredientsSelected').innerHTML = `${this.ingName}`
    // console.log(this.IsCheckedC)
    // console.log(this.IsCheckedT);
  }




  //////////////////////// GESTION D'AJOUT DES INGREDIENTS ////////////////////

  OnChange(event) {
    console.log(event);


    if (event.checked) {
      this.ingName.push(" " + event.source.name);
      this.selected.push(event.source.value);
      this.ingPrice += parseFloat(event.source.ariaLabel);
      // Ajouter l'ingrédient, son id et son prix(=ariaLabel(désigné manuellement)) à l'array
    }

    else if (event.checked === false) {
      this.ingName = this.ingName.filter((ingredient) => { return ingredient !== " " + event.source.name })
      this.selected = this.selected.filter((id) => { return id !== event.source.value });
      this.ingPrice -= parseFloat(event.source.ariaLabel);
      console.log(this.ingPrice);
    }
    document.getElementById('ingredientsSelected').innerHTML = `${this.ingName}`
    document.getElementById('prixTotal').innerHTML = `${this.ingPrice}`
  }



  ////////////////////// GESTION DES SUGGESTIONS ///////////////////////////////

  OnChangeSugg(event) {


    if (event.checked === true || event.checked === false) {

      this.suggestionService.getRequest(this.selected).subscribe((reponse) => {
        this.suggestions = reponse;
        console.log(reponse);
      },
        error => console.log(error)
      )

      this.suggestion = this.ingName

      document.getElementById('listSugg').innerHTML = `${this.suggestion}`
    }
  }


  formIsAppear() {
    this.test = true;
    console.log("écureuil")
  }
}


// Si click sur ingredient
// vérifier dans quelles pizzas de la collection suggestions se trouve-t-il
// puis fait apparaitre les ingredients de ces pizzas
