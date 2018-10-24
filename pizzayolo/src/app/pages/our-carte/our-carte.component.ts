import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-our-carte',
  templateUrl: './our-carte.component.html',
  styleUrls: ['./our-carte.component.scss']
})
export class OurCarteComponent implements OnInit {

  pizzas: any;

  constructor(private ingredientService: IngredientService, private router: Router) { }

  ngOnInit() {

    this.ingredientService.getPizza().subscribe((reponse) => {
      //  console.log(reponse);
      this.pizzas = reponse;
    },
      error => console.log(error)
    );
  }
}


