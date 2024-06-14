import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  location: string = '';
  petSittingType: string = 'dog-walking';
  cats: boolean = false;
  dogs: boolean = false;
  hasPets: boolean = false;
  vetExperience: boolean = false;
  requests: any[] = [];


  constructor(private http : HttpClient) { }

  ngOnInit(): void {
      this.getRequests();
  }

  getRequests() {
    this.http.get<any[]>('http://localhost:8080/api/services/getAllServices')
      .subscribe(data => this.requests = data);
  }

  useCurrentLocation() {
    
  }

  onSubmit() {
  
  }
}
