import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/core/services/customers.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-garage-vehicle-list',
  templateUrl: './garage-vehicles-list.component.html',
  styleUrls: ['./garage-vehicles-list.component.css'],
})
export class GarageVehiclesListComponent implements OnInit{
  vehicles: any;
  pathVehicle: string = "/mi-garage/mi-vehiculo"
  constructor(private router: Router, private customersService: CustomersService){}


  ngOnInit(): void {

    this.customersService.getById(1).subscribe({
      next: resp=>{
        this.vehicles = resp[0].vehiculos;
        console.log(resp)
        console.log(this.vehicles)
      }
    })
   }



  viewCar(id: number){
    this.router.navigateByUrl('/mi-vehiculo/' + id);

  }

}






