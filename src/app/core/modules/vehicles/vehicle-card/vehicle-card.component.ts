import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit{

  @Input() vehicle: any;
  @Input() path:any;

  constructor(private route: Router){}

  ngOnInit(){
    console.log('vehiculo', this.vehicle)
  }
  verHistorial(id: number){
    this.route.navigate([this.path + `/${id}`])
  }

}
