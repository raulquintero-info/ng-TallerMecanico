import { Component, OnInit, inject } from '@angular/core';
import { Rol } from 'src/app/core/interfaces/rol.interface';
import { RolService } from '../../../../../../core/services/rol.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit{
  roles: Rol[] = [];
  title: string = "Catalogo";
  subTitle: string = "Marcas";
  buttons = [
    // {text: "Ver Modelos", path: "/admin/catalogos/modelos"},
    {text: "Agregar", path: "/admin/catalogos/marcas-form/0"},
  ];

  private rolesService =  inject(RolService);


  ngOnInit(){
    this.rolesService.getAll().subscribe({
      next: resp=>{
        console.log('marcas', resp);
        this.roles = resp;
      }
    })
  }

}
