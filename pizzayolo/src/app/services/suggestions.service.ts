import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {
  apiHost = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getSuggestions() {
    return this.http.get(`${this.apiHost}suggestions`)
  }

  getRequest(ingredientArray){
    console.log(ingredientArray);


    // Convertir le tableau en objet Json
    return this.http.get(`${this.apiHost}suggestions`, { params: { ingredients : ingredientArray}})
    
  }
}

