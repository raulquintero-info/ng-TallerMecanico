import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { ModelossService } from '../../../services/modelos.service';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { ActivatedRoute } from '@angular/router';
import { MarcasService } from 'src/app/core/services/marcas.service';
import { Marca } from 'src/app/core/interfaces/marca.interface';

@Component({
  selector: 'app-m-modelos-list',
  templateUrl: './m-modelos-list.component.html',
  styleUrls: ['./m-modelos-list.component.css']
})
export class MModelosListComponent implements OnInit, OnDestroy{
  @Input() modelos: Modelo[] = []
  messages: Toast [] = [];
  params: any;

  private modelosService = inject(ModelossService);
  private route = inject(ActivatedRoute);

  ngOnInit(){
    // this.route.paramMap.subscribe(params => {
    //   this.marca.idMarca = Number(params.get('idMarca'))
    // });
    // this.marcasService.getById(this.marca.idMarca).subscribe({
    //   next: resp=>{
    //     this.marca = resp;
    //   }
    // })

  }

  delete(modelo: Modelo){

    this.modelosService.delete(modelo.idModelo).subscribe({
      next: resp=>{
        this.refresh(modelo.marca.idMarca);
        this.messages.push({title: "Sistema", timeAgo: "", body:"Se Ha eliminado el modelo: " + modelo.modelo})
      }
    })

  }


  refresh(idMarca: number){
    this.modelosService.getByIdMarca(idMarca).subscribe({
      next:resp=>{
        this.modelos = resp;
      }
    })
  }
  ngOnDestroy(){
    this.messages;
  }



}
