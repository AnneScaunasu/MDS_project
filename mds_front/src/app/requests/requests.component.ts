import { Component } from '@angular/core';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent{
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
