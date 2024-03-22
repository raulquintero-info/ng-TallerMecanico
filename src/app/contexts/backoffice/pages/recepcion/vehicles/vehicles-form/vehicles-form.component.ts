import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css']
})
export class VehiclesFormComponent implements OnInit {
  params: any;
  vehicle: Vehiculo = {} as Vehiculo;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}



  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);
    this.vehicle.idVehiculo = this.params.params.id;
    console.log(this.params.params.id);
  }
}
