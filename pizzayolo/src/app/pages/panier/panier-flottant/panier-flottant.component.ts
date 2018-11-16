import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-panier-flottant',
  templateUrl: './panier-flottant.component.html',
  styleUrls: ['./panier-flottant.component.scss']
})
export class PanierFlottantComponent implements OnInit {

  constructor(private router: Router) {
   }

  ngOnInit() {
  }

  toPanierPage(){
    this.router.navigate(['panier'])
  }
}
