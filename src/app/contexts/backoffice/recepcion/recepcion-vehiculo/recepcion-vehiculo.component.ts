import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-recepcion-vehiculo',
  templateUrl: './recepcion-vehiculo.component.html',
  styleUrls: ['./recepcion-vehiculo.component.css']
})
export class RecepcionVehiculoComponent  implements OnInit{
  vehicle: any;
  params: any;
  prePath: String = "/admin/recepcion"

  constructor(private route: ActivatedRoute,private vehiclesService: VehiclesService, private router: Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);
    this.vehiclesService.get(this.params.params.id).subscribe({
      next: resp=>{
        console.log('vehiculos',resp)
        this.vehicle = resp[0];
      }
    })

  }

  editar(){
    alert('no implementado')
  }
regresar(){
  this.router.navigate(['/admin/recepcion/vehiculos'])
}

}
