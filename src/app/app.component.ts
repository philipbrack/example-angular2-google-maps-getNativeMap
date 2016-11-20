import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Oregon Wage Map';
  lat:number = 45.521;
  lng:number = -122.677;
}
