import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoMotor } from 'src/app/core/interfaces/tipoMotor.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit{

  @Input() vehicle: Vehiculo ={} as Vehiculo;
  @Input() path:any ="";
  @Input() pathEdit: String = ""

  constructor(private route: Router){}

  ngOnInit(){

  }
  verHistorial(id: number){
    this.route.navigate([this.path + `/${id}`])
  }

}
