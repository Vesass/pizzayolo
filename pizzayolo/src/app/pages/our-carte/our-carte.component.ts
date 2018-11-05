import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-our-carte',
  templateUrl: './our-carte.component.html',
  styleUrls: ['./our-carte.component.scss']
})
export class OurCarteComponent implements OnInit {

  pizzas : any;

  constructor(private pizzaService: PizzaService, private router: Router) { }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe((reponse) => {
       console.log(reponse);
      this.pizzas = reponse;
    },
      error => console.log(error)
    );

  }

}
