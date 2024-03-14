import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-recepcion-vehiculos',
  templateUrl: './recepcion-vehiculos.component.html',
  styleUrls: ['./recepcion-vehiculos.component.css']
})
export class RecepcionVehiculosComponent  implements OnInit {
  vehiculos: any;
  params: any;

  constructor(private route: ActivatedRoute, private router: Router, private vehiclesService: VehiclesService){}



ngOnInit(){

  this.getall()
}

getall(){
  this.vehiclesService.getAll().subscribe({
    next: resp=>{
      console.log(resp);
      this.vehiculos = resp;
    }
  })
}

ver(id: number){
  this.router.navigate(['admin/recepcion/vehiculo/' + id]);
}


}
