import { Component } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class SearchFormComponent {
  location: string = '';
  petSittingType: string = 'dog-walking';
  cats: boolean = false;
  dogs: boolean = false;
  hasPets: boolean = false;
  vetExperience: boolean = false;

  useCurrentLocation() {
   
  }

  onSubmit() {
  
  }
}
