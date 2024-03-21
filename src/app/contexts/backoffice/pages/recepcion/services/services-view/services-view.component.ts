import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-services-view',
  templateUrl: './services-view.component.html',
  styleUrls: ['./services-view.component.css']
})
export class ServicesViewComponent implements OnInit{
  vehicle: any;
  params: any;
  constructor(private route: ActivatedRoute, private router: Router, private vehiclesService: VehiclesService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.params = params);
    this.vehiclesService.get(this.params.params.id).subscribe({
      next: resp=>{
        console.log('vehiculos',resp)
        this.vehicle = resp[0];
      }
    })
  }

  regresar(){
    this.router.navigate(['/vehiculo/' + this.params.params.id] );
  }

  }
