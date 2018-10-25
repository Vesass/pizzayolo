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
  ingredients: any;

  constructor(private ingredientService: IngredientService, private router: Router) { }

  ngOnInit() {

    // let dragonne;
    // this.ingredientService.getIngredient().subscribe((reponse) => {
    //   console.log(reponse);
    //   this.ingredients = reponse;
    //   this.ingredients.forEach(element => {

    //     dragonne = element.id_ing;

    //   });
    // },
    //   error => console.log(error)
    // );



    this.ingredientService.getPizza().subscribe((reponse) => {
      console.log(reponse);
      this.pizzas = reponse;
      let dragon = {};


      this.pizzas.forEach(element => {
        console.log("pizza")


        // element.ingredients.forEach(idIngCollPizza => {

        //   /* 
        //             for (let i = 0; i < this.ingredients.length; i++) {
        //               this.ingredients */

        //   this.ingredients.forEach(item => {
        //     if (idIngCollPizza == item.id_ing) {

        //       console.log(item.name)

        //       idIngCollPizza = item.name
        //       return idIngCollPizza

        //     }


        //   });





        //   //   console.log(test.name)
        //   // }


        // });
      });


    },
      error => console.log(error)
    );
  }
}


