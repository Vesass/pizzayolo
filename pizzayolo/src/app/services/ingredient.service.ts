import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  apiHost = 'http://localhost:3000/';

  constructor(private http : HttpClient) { }
  
  getIngredient(){

  return this.http.get(`${this.apiHost}ingredients`);
  }

}
