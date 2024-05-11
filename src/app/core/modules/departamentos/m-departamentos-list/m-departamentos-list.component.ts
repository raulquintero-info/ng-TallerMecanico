import { Component, Input, OnDestroy, inject } from '@angular/core';
import { Departamento } from 'src/app/core/interfaces/departamento.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { DepartamentosService } from 'src/app/core/services/departamentos.service';

@Component({
  selector: 'app-m-departamentos-list',
  templateUrl: './m-departamentos-list.component.html',
  styleUrls: ['./m-departamentos-list.component.css']
})
export class MDepartamentosListComponent implements OnDestroy{
  @Input() departamentos: Departamento[] = [];
  @Input() path: string = '';
  messages: Toast [] = [];
  
  private departamentoService = inject(DepartamentosService);
  
  
  
  
  delete(departamento: Departamento){
  
    this.departamentoService.delete(departamento.idDepartamento).subscribe({
      next: resp=>{
        this.refresh();
        this.messages.push({title: "Sistema", timeAgo: "", body:"Se Ha eliminado el departamento: " + departamento.departamento, type:"success"})
  
      },
      error: resp=>{
        this.messages.push({title: "Sistema", timeAgo: "", body:"No ha sido posible Borrar el registro, intente mas tarde", type: "danger"})
      }
    })
  }
  
  refresh(){
    this.departamentoService.getAll().subscribe({
      next:resp=>{
        this.departamentos = resp;
      }
    })
  }
  ngOnDestroy(){
    this.messages;
  }
}
