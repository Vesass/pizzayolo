import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiHost = 'http://localhost:3000/';



  constructor(private http: HttpClient) { }


  isLogged() {
    return this.http.get(`${this.apiHost}login`);
  }


  registerUser(user) {
    this.http.post('http://localhost:3000/register', user).subscribe(res => {
      console.log(res);
    })

  }
  getUserDetails() {
    //va envoyer les donnée de l'utilisateur en api vers le back

  }



  loginUser(user) {
    this.http.post('http://localhost:3000/login', user).subscribe(res => {
      console.log(res);
    })

  }

}


