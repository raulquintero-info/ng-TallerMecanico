import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-recepcion-vehicle',
  templateUrl: './recepcion-vehicle.component.html',
  styleUrls: ['./recepcion-vehicle.component.css']
})
export class RecepcionVehicleComponent  implements OnInit{
  ordenesDeServicio: OrdenServicio[] =[]
  pathEdit: string = "/admin/recepcion/vehiculos/form";
  vehicle: Vehiculo = {} as Vehiculo;
  params: any;
  // pathVehicle: string = "/mi-garage/servicio";
  pathVehicle: string = "/admin/recepcion/servicios";

  constructor(
    private route: ActivatedRoute,
    private vehiclesService: VehiclesService,
    private servicesService: ServicesService,
    private router: Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);
    this.vehiclesService.get(this.params.params.id).subscribe({
      next: resp=>{
        console.log('vehiculos',resp)
        this.vehicle = resp;

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
    document.querySelector('#newComment');
  }


  navigate(path: string){
    this.router.navigate([path])
  }
regresar(){
  this.router.navigate(['dashboard'])
}

print(){
  window.print();
}

}