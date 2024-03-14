import { Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  vehicles: any;
  pathVehicle: string = "/vehiculo"
  constructor(private router: Router, private customersService: CustomersService){}


  ngOnInit(): void {

    this.customersService.get(1).subscribe({
      next: resp=>{
        this.vehicles = resp[0].vehiculos;
        console.log(resp)
        console.log(this.vehicles)
      }
    })
   }



  viewCar(id: number){
    this.router.navigateByUrl('/vehiculo/' + id);

  }
}
