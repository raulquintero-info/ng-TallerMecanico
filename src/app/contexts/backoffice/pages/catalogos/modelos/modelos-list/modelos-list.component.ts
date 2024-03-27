import { Component, OnInit, inject } from '@angular/core';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { MarcasService } from 'src/app/core/services/marcas.service';
import { ModelossService } from 'src/app/core/services/modelos.service';

@Component({
  selector: 'app-modelos-list',
  templateUrl: './modelos-list.component.html',
  styleUrls: ['./modelos-list.component.css']
})
export class ModelosListComponent implements OnInit{
  modelos: Modelo[] = [];
  title: string = "Catalogo";
  subTitle: string = "Modelos de";
  buttons = [{text: "Agregar", path: "/admin/catalogos/modelos-form/0"}];

  private modelosService =  inject(ModelossService);


  ngOnInit(){
    this.modelosService.getAll().subscribe({
      next: resp=>{
        this.modelos = resp;
      }
    })
  }
}
