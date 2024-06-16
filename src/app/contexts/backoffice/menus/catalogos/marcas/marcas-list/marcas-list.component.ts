import { Component, OnInit, inject } from '@angular/core';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Page } from 'src/app/core/interfaces/page.interface';
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

  currentPage: number = 1;
  totalPages: number = 1;

  paginador: any;


  private marcasService =  inject(MarcasService);


  ngOnInit(){
    // this.marcasService.getAll().subscribe({
    //   next: resp=>{
    //     console.log('marcas', resp);
    //     this.marcas = resp;
    //   }
    // })

    this.loadMarcas(this.currentPage-1);
  }


  loadMarcas(page: number) { 
    this.marcasService
      .getPaginatedData(page)
      .subscribe((data: Page<any>) => {
        this.marcas = data.content;
        this.totalPages = data.totalPages;
        this.currentPage = data.number + 1;
      });
  }

  onPageChange(page: number) {
    this.loadMarcas(page-1);
  }

}
