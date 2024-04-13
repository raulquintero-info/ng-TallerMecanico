import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Button } from 'src/app/core/interfaces/button.interface';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-services-view',
  templateUrl: './services-view.component.html',
  styleUrls: ['./services-view.component.css']
})
export class ServicesViewComponent implements OnInit {
  title: string = 'Taller AutoPro';
  subTitle: string = 'Orden de Servicio'
  buttons =[
    // {text: 'Servicios', path: "/admin/recepcion/vehiculos/1"}
  ];

  service: OrdenServicio = {} as OrdenServicio;
  vehicle: Vehiculo = {modelo:{marca: {} as Marca} as Modelo} as Vehiculo;
  servicio: any;
  params: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehiclesService: VehiclesService,
    private servicesService: ServicesService,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.params = params);
    this.vehiclesService.get(3).subscribe({
      next: resp => {
        console.log('vehiculos', resp)
        this.vehicle = resp;
      }
    })

    this.servicesService.getById(this.params.params.id).subscribe({
      next: resp => {
        console.log('servicio', resp)
        this.service = resp;
      }
    })

  }

  regresar() {
    this.router.navigate(['/vehiculo/' + this.params.params.id]);
  }

}
