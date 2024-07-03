import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { VehiclesService } from 'src/app/core/services/vehicles.service';
import { OrdenServicio } from '../../../../../../core/interfaces/ordenServicio.interface';

@Component({
  selector: 'app-taller-vehicle-list',
  templateUrl: './taller-vehicle-list.component.html',
  styleUrls: ['./taller-vehicle-list.component.css']
})
export class TallerVehicleListComponent implements OnInit {
  isLoading: boolean = true;

  title: string = 'Taller';
  subTitle: string = 'Vehiculos en Taller';
  vehicles: any =[];
  pathVehicle: string ="/admin/taller/vehiculos";
  params: any;

  constructor(private route: ActivatedRoute, private router: Router, private vehiclesService: VehiclesService){}



ngOnInit(){

  this.getall()
}

getall(){
  this.vehiclesService.getAll().subscribe({
    next: resp=>{
      console.log(resp);
      this.vehicles = resp.filter(function(element:Vehiculo){
        return element.ordenServicio.length > 0
      })
      this.vehicles=resp
      this.isLoading = false
    },
    error: resp=>{
      this.isLoading = false
    }
  })
}

//TODO: eliminar funcion, si no se necesita
// ver(id: number){
//   this.router.navigate(['admin/recepcion/vehiculos/' + id]);
// }


}
