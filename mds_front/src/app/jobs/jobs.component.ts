import { Component } from '@angular/core';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent{
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
