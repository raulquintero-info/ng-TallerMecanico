import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit{
  vehicle: any;
  params: any;


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

regresar(){
  this.router.navigate(['dashboard'])
}

}






