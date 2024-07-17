import { Component, OnInit, inject } from '@angular/core';
import { TipoMotor } from 'src/app/core/interfaces/tipoMotor.interface';
import { TipoMotorService } from 'src/app/core/services/tipoMotor.service';

@Component({
  selector: 'app-tipo-motor-list',
  templateUrl: './tipo-motor-list.component.html',
  styleUrls: ['./tipo-motor-list.component.css']
})
export class TipoMotorListComponent implements OnInit{
  tiposMotores: TipoMotor[] = [];
  title: string = "Catalogo";
  subTitle: string = "Tipos de Motor";
  buttons = [
    // {text: "Ver Modelos", path: "/admin/catalogos/modelos"},
    {text: "Agregar", path: "/admin/catalogos/tipos-motor-form/0"},
  ];

  currentPage: number = 1;
  totalPages: number = 1;

  private tipoMotorService =  inject(TipoMotorService);


  ngOnInit(){
    this.tipoMotorService.getAll().subscribe({
      next: resp=>{
        console.log('tiposMotor', resp);
        this.tiposMotores = resp;
      }
    })
  }

  onPageChange(page: number) {
    // this.loadVehicles(page - 1);

  }

}
