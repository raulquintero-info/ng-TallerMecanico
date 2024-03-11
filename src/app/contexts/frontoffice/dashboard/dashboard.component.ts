import { Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  vehicles: any;

  constructor(private router: Router, private vehiclesService: VehiclesService){}


  ngOnInit(): void {

    this.vehiclesService.getAll().subscribe({
      next: resp=>{
        this.vehicles = resp;
      }
    })
   }



  viewCar(id: number){
    this.router.navigateByUrl('/vehiculo/' + id);

  }
}
