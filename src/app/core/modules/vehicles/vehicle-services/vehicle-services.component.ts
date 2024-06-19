import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';

@Component({
  selector: 'app-vehicle-services',
  templateUrl: './vehicle-services.component.html',
  styleUrls: ['./vehicle-services.component.css']
})
export class VehicleServicesComponent implements OnInit {
  @Input() pathVehicle: String ="";
  @Input() ordenesDeServicio: OrdenServicio[] = [];

  // @Input() platformBrowserDynamic

  constructor(private router: Router){}

  ngOnInit(){
    console.log(this.ordenesDeServicio);
  }




  verServicio(id: number){
    this.router.navigate([this.pathVehicle + '/' + id]);
  }
}
