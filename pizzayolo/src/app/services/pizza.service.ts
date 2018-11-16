import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  apiHost = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getPizzas() {

    return this.http.get(`${this.apiHost}pizzas`);
  }

}
