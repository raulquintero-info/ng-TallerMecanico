import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { MarcasService } from 'src/app/core/services/marcas.service';

@Component({
  selector: 'app-marcas-form',
  templateUrl: './marcas-form.component.html',
  styleUrls: ['./marcas-form.component.css']
})
export class MarcasFormComponent implements OnInit{
  showSpinner: boolean = false;
  respuesta: string ='';
  params: any;
  marca: Marca = {} as Marca;
  title: string = "Catalogos";
  subTitle: string = "Agregar Marca";
  buttons = [
    {text: "Ver Marcas", path: "/admin/catalogos/marcas"},
  ];

  private marcasService =  inject(MarcasService);
  private route = inject(ActivatedRoute);


  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
      this.marca.idMarca = Number(params.get('id'))
      });

    if(this.marca.idMarca>0){
      this.subTitle = 'Editar Marca';
      this.marcasService.getById(this.marca.idMarca).subscribe({
        next: resp=>{
          this.marca = resp;
        }
      })
    }
  }


  save(){
    this.showSpinner = true;
    this.respuesta ='';
    if (this.marca.idMarca > 0) {
      console.log('cliente enviado', this.marca);
      this.marcasService.createOrUpdate(this.marca).subscribe({
        next: resp => {
          this.marca = resp.marca;
          this.respuesta = resp.mensaje;
          console.log('respMarca', resp)
          this.showSpinner = false;
        },
        error: resp => {
          console.log('update error:', resp)
          this.showSpinner = false;
        }
      })
    } else {

      console.log('cliente enviado', this.marca);

      this.marcasService.createOrUpdate(this.marca).subscribe({
        next: resp => {
          // this.marca.usuario = resp.usuario;
          console.log('respUsuario', resp)
          this.showSpinner = false;
        },
        error: resp => {
          console.log('create error:', resp);
          this.respuesta = resp;
          this.showSpinner = false;
        }
      })
    }


  }



}
