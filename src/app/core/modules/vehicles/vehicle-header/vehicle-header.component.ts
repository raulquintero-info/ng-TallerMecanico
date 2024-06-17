import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoMotor } from 'src/app/core/interfaces/tipoMotor.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';

@Component({
  selector: 'app-vehicle-header',
  templateUrl: './vehicle-header.component.html',
  styleUrls: ['./vehicle-header.component.css']
})
export class VehicleHeaderComponent implements OnInit{

  @Input() vehicle: Vehiculo ={tipoMotor:{idTipoMotor: 0,tipoMotor: ''} as TipoMotor} as Vehiculo;
  @Input() path:any ="";
  @Input() pathEdit: String = ""

  constructor(private route: Router){}

  ngOnInit(){

  }
  verHistorial(id: number){
    this.route.navigate([this.path + `/${id}`])
  }

}
