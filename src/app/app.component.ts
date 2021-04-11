import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shit-app';
  homePage = 'localhost:4200';
  constructor(
    private readonly router: Router,
  
  ) {}



  ngOnInit(): void {

    this.router.navigate(['/shit-home']);

  }

  

}
