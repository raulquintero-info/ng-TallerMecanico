import { Component, Input, inject } from '@angular/core';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { ModelossService } from '../../../services/modelos.service';
import { Toast } from 'src/app/core/interfaces/toast.interface';

@Component({
  selector: 'app-m-modelos-list',
  templateUrl: './m-modelos-list.component.html',
  styleUrls: ['./m-modelos-list.component.css']
})
export class MModelosListComponent {
  @Input() modelos: Modelo[] = []
  messages: Toast [] = [];


  private modelosService = inject(ModelossService)


  delete(modelo: Modelo){

    this.modelosService.delete(modelo.idModelo).subscribe({
      next: resp=>{
        this.refresh();
        this.messages.push({title: "Sistema", timeAgo: "", body:"Se Ha eliminado el modelo: " + modelo.modelo})
      }
    })

  }


  refresh(){
    this.modelosService.getAll().subscribe({
      next:resp=>{
        this.modelos = resp;
      }
    })
  }
  ngOnDestroy(){
    this.messages;
  }



}
