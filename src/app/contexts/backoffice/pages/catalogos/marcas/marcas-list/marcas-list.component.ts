import { Component, OnInit, inject } from '@angular/core';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { MarcasService } from 'src/app/core/services/marcas.service';

@Component({
  selector: 'app-marcas-list',
  templateUrl: './marcas-list.component.html',
  styleUrls: ['./marcas-list.component.css']
})
export class MarcasListComponent implements OnInit{
  marcas: Marca[] = [];
  title: string = "Catalogo";
  subTitle: string = "Marcas";
  buttons = [
    // {text: "Ver Modelos", path: "/admin/catalogos/modelos"},
    {text: "Agregar", path: "/admin/catalogos/marcas-form/0"},
  ];

  private marcasService =  inject(MarcasService);


  ngOnInit(){
    this.marcasService.getAll().subscribe({
      next: resp=>{
        console.log('marcas', resp);
        this.marcas = resp;
      }
    })
  }

}
