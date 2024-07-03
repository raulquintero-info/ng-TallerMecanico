import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-garage-vehicles-view',
  templateUrl: './garage-vehicles-view.component.html',
  styleUrls: ['./garage-vehicles-view.component.css']
})
export class GarageVehiclesViewComponent implements OnInit {
  // services: OrdenServicio []= [];
  vehicle: Vehiculo = { modelo: { marca: {} as Marca } as Modelo } as Vehiculo;
  params: any;
  pathVehicle: string = "/mi-garage/servicio";
  ordenesDeServicio: OrdenServicio[] = [];
  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private vehiclesService: VehiclesService,
    private router: Router,
    private servicesService: ServicesService) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'bg');

    this.route.paramMap.subscribe(params => this.params = params);
    this.vehiclesService.getOrdenesByIdVehicle(this.params.params.id).subscribe({
      next: resp => {
        console.log('vehiculo', resp)
        this.vehicle = resp;
      },
      error: resp => {
        console.log('error', resp);
        this.router.navigateByUrl("not-found", { skipLocationChange: true });

      }



    })
    this.vehiclesService.getVehicleById(this.params.params.id).subscribe({
      next: (resp:any)=>{
        console.log('kkk', resp);
      }
    })
    // this.servicesService.getAll().subscribe({
    //   next: resp=>{
    //     this.services=resp;
    //   }
    // })

  }

  navigate(path: string) {
    this.router.navigate([path])
  }
  regresar() {
    this.router.navigate(['dashboard'])
  }

  getServicesOrder() {
    this.servicesService.getAll().subscribe({
      next: resp => {
        this.ordenesDeServicio = resp;
        console.log(this.ordenesDeServicio);
      }
    });
  }
}
