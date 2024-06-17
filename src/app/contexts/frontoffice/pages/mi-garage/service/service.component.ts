import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { ServicesService } from 'src/app/core/services/services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{
params: any;
orden: OrdenServicio = {} as OrdenServicio;
total=0;
private servicesService = inject(ServicesService);
private route = inject(ActivatedRoute);
private router = inject(Router);

ngOnInit(): void {
  this.route.paramMap.subscribe(params =>  {
    this.params = params
    this.orden.idOrdenServicio = this.params.get('id');
    this.getOrdenServicio(this.orden.idOrdenServicio);

  });

}


getOrdenServicio(id: number ){
  this.servicesService.getById(id).subscribe({
    next: resp=>{
      this.orden = resp;
      this.total = this.orden.detalleOrdenServicios.reduce((a, b) => a + b.costo, 0)
    }
  })

}


regresar(){
  this.router.navigate(['/mi-garage/mi-vehiculo/' + this.orden.vehiculo?.idVehiculo] );
}

}
