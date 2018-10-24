import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  apiHost = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getIngredient() {

    return this.http.get(`${this.apiHost}ingredients`);
    // .pipe(map(data=>data as Ingredient[]))
  }

  getPizza() {

    return this.http.get(`${this.apiHost}pizzas`);
    // .pipe(map(data=>data as Ingredient[]))
  }

}