import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';
import { OrdenServicio } from '../../../../../../core/interfaces/ordenServicio.interface';

@Component({
  selector: 'app-vehicles-services-list',
  templateUrl: './vehicles-services-list.component.html',
  styleUrls: ['./vehicles-services-list.component.css']
})
export class VehiclesServicesListComponent implements OnInit{
  ordenesDeServicio: any =[]
  pathEdit: string = "/admin/recepcion/vehiculos/form";
  vehicle: Vehiculo = {ordenServicio: [{}]} as Vehiculo;
  params: any;
  // pathVehicle: string = "/mi-garage/servicio";
  pathVehicle: string = "/admin/recepcion/servicios";

  constructor(
    private route: ActivatedRoute,
    private vehiclesService: VehiclesService,
    private router: Router,
    private servicesService: ServicesService
    ){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);
    this.vehiclesService.getOrdenesByIdVehicle(this.params.params.id).subscribe({
      next: resp=>{
        console.log('vehiculos',resp)
        this.vehicle.ordenServicio = resp;

      }
    });

    this.getServicesOrder();

  }


  getServicesOrder(){
    this.servicesService.getAll().subscribe({
      next: resp=>{
        this.ordenesDeServicio = resp;
        console.log(this.ordenesDeServicio);
      }
    });
  }

  navigate(path: string){
    this.router.navigate([path])
  }
regresar(){
  this.router.navigate(['dashboard'])
}


}
