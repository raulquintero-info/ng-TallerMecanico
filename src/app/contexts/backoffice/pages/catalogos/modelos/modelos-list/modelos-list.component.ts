import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { Page } from 'src/app/core/interfaces/page.interface';
import { MarcasService } from 'src/app/core/services/marcas.service';
import { ModelossService } from 'src/app/core/services/modelos.service';

@Component({
  selector: 'app-modelos-list',
  templateUrl: './modelos-list.component.html',
  styleUrls: ['./modelos-list.component.css']
})
export class ModelosListComponent implements OnInit {
  modelos: Modelo[] = [];
  title: string = "Catalogo";
  subTitle: string = "Modelos de ";
  buttons = [{ text: "Agregar", path: "/admin/catalogos/modelos-form/0" }];
  params: any;
  marca: Marca = {} as Marca;

  currentPage: number = 1;
  totalPages: number = 1;

  paginador: any;

  private marcasService = inject(MarcasService);
  private modelosService = inject(ModelossService);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.marca.idMarca = Number(params.get('idMarca'))
    });

    if (this.marca.idMarca > 0) {
      // this.marcasService.getById(this.marca.idMarca).subscribe({
      //   next: resp => {
      //     this.marca = resp;
      //     this.subTitle = this.subTitle + this.marca.marca;
      //   }
      // });
      this.modelosService.getByIdMarca(this.marca.idMarca).subscribe({
            next: resp => {
              this.modelos = resp;
            }
          })
    } else {

      this.loadModelos(this.currentPage - 1);
    }

    // if (this.marca.idMarca > 0) {

    //   this.modelosService.getByIdMarca(this.marca.idMarca).subscribe({
    //     next: resp => {
    //       this.modelos = resp;
    //     }
    //   })
    // } else{
    //   this.subTitle = "Todos los Modelos";
    //   this.modelosService.getAll().subscribe({
    //     next: resp => {
    //       this.modelos = resp;
    //     }
    //   })
    // }

  }


  loadModelos(page: number) {
    this.modelosService
      .getPaginatedData(page)
      .subscribe((data: Page<any>) => {
        this.modelos = data.content;
        this.totalPages = data.totalPages;
        this.currentPage = data.number + 1;
      });
  }

  onPageChange(page: number) {
    this.loadModelos(page - 1);
  }

}
