import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from 'src/app/core/guards/admin.guard';
import { DepartamentosFormComponent } from './departamentos/departamentos-form/departamentos-form.component';
import { DepartamentosListComponent } from './departamentos/departamentos-list/departamentos-list.component';
import { EstatusServicioFormComponent } from './estatus-servicio/estatus-servicio-form/estatus-servicio-form.component';
import { EstatusServicioListComponent } from './estatus-servicio/estatus-servicio-list/estatus-servicio-list.component';
import { MarcasFormComponent } from './marcas/marcas-form/marcas-form.component';
import { MarcasListComponent } from './marcas/marcas-list/marcas-list.component';
import { ModelosFormComponent } from './modelos/modelos-form/modelos-form.component';
import { ModelosListComponent } from './modelos/modelos-list/modelos-list.component';
import { RolesFormComponent } from './roles/roles-form/roles-form.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { TipoMotorFormComponent } from './tipo-motor/tipo-motor-form/tipo-motor-form.component';
import { TipoMotorListComponent } from './tipo-motor/tipo-motor-list/tipo-motor-list.component';

const routes: Routes = [
  {
    path: '',
    children: [


      { path: 'marcas', component: MarcasListComponent, canActivate: [adminGuard] },
      { path: 'marcas-form/:id', component: MarcasFormComponent, canActivate: [adminGuard] },

      { path: 'modelos/:idMarca', component: ModelosListComponent, canActivate: [adminGuard] },
      { path: 'modelos-form/:id', component: ModelosFormComponent, canActivate: [adminGuard] },

      { path: 'roles', component: RolesListComponent, canActivate: [adminGuard] },
      { path: 'roles-form/:id', component: RolesFormComponent, canActivate: [adminGuard] },

      { path: 'tipos-motor', component: TipoMotorListComponent, canActivate: [adminGuard] },
      { path: 'tipos-motor-form/:id', component: TipoMotorFormComponent, canActivate: [adminGuard] },

      { path: 'estatus-servicio', component: EstatusServicioListComponent, canActivate: [adminGuard] },
      { path: 'estatus-servicio-form/:id', component: EstatusServicioFormComponent, canActivate: [adminGuard] },

      { path: 'departamentos', component: DepartamentosListComponent, canActivate: [adminGuard] },
      { path: 'departamento-form/:id', component: DepartamentosFormComponent, canActivate: [adminGuard] },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }
