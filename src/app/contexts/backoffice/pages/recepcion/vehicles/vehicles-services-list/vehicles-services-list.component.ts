import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-vehicles-services-list',
  templateUrl: './vehicles-services-list.component.html',
  styleUrls: ['./vehicles-services-list.component.css']
})
export class VehiclesServicesListComponent implements OnInit{
  ordenesDeServicio: any =[]
  pathEdit: string = "/admin/recepcion/vehiculos/form";
  vehicle: Vehiculo = {} as Vehiculo;
  params: any;
  // pathVehicle: string = "/mi-garage/servicio";
  pathVehicle: string = "/admin/recepcion/servicios";

  constructor(private route: ActivatedRoute,private vehiclesService: VehiclesService, private router: Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);
    this.vehiclesService.get(this.params.params.id).subscribe({
      next: resp=>{
        console.log('vehiculos',resp)
        this.vehicle = resp;

      }
    })

  }

  navigate(path: string){
    this.router.navigate([path])
  }
regresar(){
  this.router.navigate(['dashboard'])
}


}
