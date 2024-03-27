import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
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

  private marcasService = inject(MarcasService);
  private modelosService = inject(ModelossService);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.marca.idMarca = Number(params.get('idMarca'))
    });

    this.marcasService.getById(this.marca.idMarca).subscribe({
      next: resp => {
        this.marca = resp;
        this.subTitle = this.subTitle + this.marca.marca;
      }
    })


    if (this.marca.idMarca > 0) {

      this.modelosService.getByIdMarca(this.marca.idMarca).subscribe({
        next: resp => {
          this.modelos = resp;
        }
      })
    } else{
      this.subTitle = "Todos los Modelos";
      this.modelosService.getAll().subscribe({
        next: resp => {
          this.modelos = resp;
        }
      })
    }
  }
}
