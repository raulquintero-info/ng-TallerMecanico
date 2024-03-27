import { Component, Input, OnDestroy, inject } from '@angular/core';
import { TipoMotor } from '../../../interfaces/tipoMotor.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { TipoMotorService } from 'src/app/core/services/tipoMotor.service';

@Component({
  selector: 'app-m-tipos-motor-list',
  templateUrl: './m-tipos-motor-list.component.html',
  styleUrls: ['./m-tipos-motor-list.component.css']
})
export class MTiposMotorListComponent implements OnDestroy {
  @Input() tiposMotores: TipoMotor[] = [];
  @Input() path: string = '';
  messages: Toast [] = [];

  private tipoMotorService = inject(TipoMotorService);




  delete(tipoMotor: TipoMotor){

    this.tipoMotorService.delete(tipoMotor.idTipoMotor).subscribe({
      next: resp=>{
        this.refresh();
        this.messages.push({title: "Sistema", timeAgo: "", body:"Se Ha eliminado la marca: " + tipoMotor.tipoMotor, type:"success"})

      },
      error: resp=>{
        this.messages.push({title: "Sistema", timeAgo: "", body:"No ha sido posible Borrar el registro, intente mas tarde", type: "danger"})
      }
    })
  }

  refresh(){
    this.tipoMotorService.getAll().subscribe({
      next:resp=>{
        this.tiposMotores = resp;
      }
    })
  }
  ngOnDestroy(){
    this.messages;
  }

  }
