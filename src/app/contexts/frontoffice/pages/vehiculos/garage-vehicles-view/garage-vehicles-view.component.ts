import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-garage-vehicles-view',
  templateUrl: './garage-vehicles-view.component.html',
  styleUrls: ['./garage-vehicles-view.component.css']
})
export class GarageVehiclesViewComponent implements OnInit{

  vehicle: any;
  params: any;
  pathVehicle: string = "/mi-garage/servicio";

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

  navigate(path: string){
    this.router.navigate([path])
  }
regresar(){
  this.router.navigate(['dashboard'])
}


}
