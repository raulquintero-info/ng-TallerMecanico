import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-recepcion-vehicle',
  templateUrl: './taller-vehicle.component.html',
  styleUrls: ['./taller-vehicle.component.css']
})
export class TallerVehicleComponent  implements OnInit{
  ordenesDeServicio: OrdenServicio[] =[]
  pathEdit: string = "/admin/taller/vehiculos/form";
  vehicle: Vehiculo = {} as Vehiculo;
  params: any;
  // pathVehicle: string = "/mi-garage/servicio";
  pathVehicle: string = "/admin/taller/servicios";

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
