import { Component, Input, OnDestroy, inject } from '@angular/core';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { MarcasService } from '../../../services/marcas.service';

@Component({
  selector: 'app-m-marcas-list',
  templateUrl: './m-marcas-list.component.html',
  styleUrls: ['./m-marcas-list.component.css']
})
export class MMarcasListComponent implements OnDestroy {
@Input() marcas: Marca[] = [];
@Input() path: string = '';
messages: Toast [] = [];

private marcasService = inject(MarcasService);




delete(marca: Marca){

  this.marcasService.delete(marca.idMarca).subscribe({
    next: resp=>{
      this.refresh();
      this.messages.push({title: "Sistema", timeAgo: "", body:"Se Ha eliminado la marca: " + marca.marca, type:"success"})

    },
    error: resp=>{
      this.messages.push({title: "Sistema", timeAgo: "", body:"No ha sido posible Borrar el registro, intente mas tarde", type: "danger"})
    }
  })
}

refresh(){
  this.marcasService.getAll().subscribe({
    next:resp=>{
      this.marcas = resp;
    }
  })
}
ngOnDestroy(){
  this.messages;
}

}
