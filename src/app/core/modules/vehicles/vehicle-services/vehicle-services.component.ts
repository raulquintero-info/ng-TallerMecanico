import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-vehicle-services',
  templateUrl: './vehicle-services.component.html',
  styleUrls: ['./vehicle-services.component.css']
})
export class VehicleServicesComponent implements OnInit {
  @Input() pathVehicle: String ="";
  @Input() services: any;
  // @Input() platformBrowserDynamic

  constructor(private router: Router){}

  ngOnInit(){
    console.log(this.services);
  }




  verServicio(id: number){
    this.router.navigate([this.pathVehicle + '/' + id]);
  }
}
