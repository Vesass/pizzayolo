import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './../services/api.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private apiService: ApiService, private breakpointObserver: BreakpointObserver, private router: Router) { }


  onLogout(e) {
    e.preventDefault();
    this.apiService.logout();
    console.log('on logout')
    this.router.navigateByUrl("/")

  }

}
