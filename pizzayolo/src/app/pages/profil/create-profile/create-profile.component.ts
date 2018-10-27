import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { ApiService } from './../../../services/api.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {


  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  registerUser(user) {
    this.apiService.registerUser(user);

  }

}
