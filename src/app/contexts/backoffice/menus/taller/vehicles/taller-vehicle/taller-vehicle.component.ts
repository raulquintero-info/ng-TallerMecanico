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
export class TallerVehicleComponent implements OnInit {
  ordenesDeServicio: OrdenServicio[] = []
  ordenesActivas: OrdenServicio[] = [{} as OrdenServicio]
  fechaEntrada: string ='';
  pathEdit: string = "/admin/taller/vehiculos/form";
  vehicle: Vehiculo = {} as Vehiculo;
  params: any;
  // pathVehicle: string = "/mi-garage/servicio";
  pathVehicle: string = "/admin/taller/servicios";

  constructor(
    private route: ActivatedRoute,
    private vehiclesService: VehiclesService,
    private servicesService: ServicesService,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {

    // this.route.paramMap.subscribe(params =>{
      // this.params = params
      this.getServicesOrder(Number(params.get('id')));
      this.getVehicleByIdWithOrders(Number(params.get('id')));

    });


  }

  getVehicleByIdWithOrders(id: number){
    this.vehiclesService.getOrdenesByIdVehicle(id).subscribe({
      next: resp => {
        console.log('ordenes por vehiculo', resp)
        this.vehicle = resp;
        this.ordenesActivas = this.vehicle.ordenServicio;
        this.ordenesActivas = this.ordenesActivas.filter((x)=> x.estatusServicio.idEstatusServicio != 6);
        console.log('OA',this.ordenesActivas)
        if(this.ordenesActivas.length>0) {
          this.fechaEntrada = this.ordenesActivas[0].fechaOrden;
        }
      }
    });
  }

  getServicesOrder(id: number) {
    this.servicesService.getAllByIdVehicle(id).subscribe({

      // this.servicesService.getAll().subscribe({
      next: resp => {
        console.log('ordenesServico',resp);
        this.ordenesDeServicio = resp;
      }
    });
    document.querySelector('#newComment');
  }


  navigate(path: string) {
    this.router.navigate([path])
  }
  regresar() {
    this.router.navigate(['dashboard'])
  }

  print() {
    window.print();
  }

}
