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
  pdfFile: string = ''
  title: string = 'Taller';
  subTitle: string = 'Vehiculos en Taller';
  buttons = [
    { text: "PDF *", path: "/admin/recepcion/vehiculos-pdf" },
  ];
  vehicles: any =[];
  pathVehicle: string ="/admin/taller/vehiculos";
  params: any;

  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private route: ActivatedRoute, private router: Router, private vehiclesService: VehiclesService){}



ngOnInit(){

  this.getall()
}

getall(){
  this.vehiclesService.getVehiculosTaller().subscribe({
    next: (resp:any)=>{
      console.log(resp);
      this.vehicles = resp.filter(function(element:Vehiculo){
        return element.ordenServicio.length > 0
      })
      this.vehicles=resp
      this.isLoading = false
    },
    error: (resp:any)=>{
      this.isLoading = false
    }
  })
}


onPageChange(page: number) {
  // this.loadVehicles(page - 1);

}


//TODO: eliminar funcion, si no se necesita
// ver(id: number){
//   this.router.navigate(['admin/recepcion/vehiculos/' + id]);
// }




}
