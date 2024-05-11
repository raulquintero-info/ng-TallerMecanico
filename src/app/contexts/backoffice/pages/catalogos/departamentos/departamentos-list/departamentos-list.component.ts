import { Component, OnInit, inject } from '@angular/core';
import { Departamento } from 'src/app/core/interfaces/departamento.interface';
import { Page } from 'src/app/core/interfaces/page.interface';
import { DepartamentosService } from 'src/app/core/services/departamentos.service';

@Component({
  selector: 'app-departamentos-list',
  templateUrl: './departamentos-list.component.html',
  styleUrls: ['./departamentos-list.component.css']
})
export class DepartamentosListComponent implements OnInit{

  departamentos: Departamento[] = [];
  title: string = "Catalogo";
  subTitle: string = "Departamentos";
  buttons = [
    // {text: "Ver Modelos", path: "/admin/catalogos/modelos"},
    {text: "Agregar", path: "/admin/catalogos/departamento-form/0"},
  ];

  currentPage: number = 1;
  totalPages: number = 1;

  paginador: any;


  private departamentoService =  inject(DepartamentosService);


  ngOnInit(){

    this.loadDepartamentos(this.currentPage-1);
  }


  loadDepartamentos(page: number) { 
    this.departamentoService
      .getPaginatedData(page)
      .subscribe((data: Page<any>) => {
        this.departamentos = data.content;
        this.totalPages = data.totalPages;
        this.currentPage = data.number + 1;
      });
  }

  onPageChange(page: number) {
    this.loadDepartamentos(page-1);
  }


}
