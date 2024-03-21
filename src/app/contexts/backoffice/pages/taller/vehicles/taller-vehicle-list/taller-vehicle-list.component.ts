import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-taller-vehicle-list',
  templateUrl: './taller-vehicle-list.component.html',
  styleUrls: ['./taller-vehicle-list.component.css']
})
export class TallerVehicleListComponent implements OnInit {
  vehicles: any;
  pathVehicle: string ="/admin/recepcion/vehiculos";
  params: any;

  constructor(private route: ActivatedRoute, private router: Router, private vehiclesService: VehiclesService){}



ngOnInit(){

  this.getall()
}

getall(){
  this.vehiclesService.getAll().subscribe({
    next: resp=>{
      console.log(resp);
      this.vehicles = resp;
    }
  })
}

ver(id: number){
  this.router.navigate(['admin/recepcion/vehiculos/' + id]);
}


}
