import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { DepartamentosFormComponent } from './departamentos/departamentos-form/departamentos-form.component';
import { TipoMotorFormComponent } from './tipo-motor/tipo-motor-form/tipo-motor-form.component';
import { DepartamentosListComponent } from './departamentos/departamentos-list/departamentos-list.component';
import { EstatusServicioFormComponent } from './estatus-servicio/estatus-servicio-form/estatus-servicio-form.component';
import { EstatusServicioListComponent } from './estatus-servicio/estatus-servicio-list/estatus-servicio-list.component';
import { MarcasFormComponent } from './marcas/marcas-form/marcas-form.component';
import { MarcasListComponent } from './marcas/marcas-list/marcas-list.component';
import { ModelosFormComponent } from './modelos/modelos-form/modelos-form.component';
import { ModelosListComponent } from './modelos/modelos-list/modelos-list.component';
import { RolesFormComponent } from './roles/roles-form/roles-form.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { TipoMotorListComponent } from './tipo-motor/tipo-motor-list/tipo-motor-list.component';
import { DepartamentosModule } from 'src/app/core/modules/departamentos/departamentos.module';
import { EstatusServicioModule } from 'src/app/core/modules/estatus-servicio/estatus-servicio.module';
import { MarcasModule } from 'src/app/core/modules/marcas/marcas.module';
import { ModelosModule } from 'src/app/core/modules/modelos/modelos.module';
import { RolesModule } from 'src/app/core/modules/roles/roles.module';
import { TiposMotorModule } from 'src/app/core/modules/tipos-motor/tipos-motor.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DepartamentosFormComponent,
    DepartamentosListComponent,
    EstatusServicioFormComponent,
    EstatusServicioListComponent,
    MarcasFormComponent,
    MarcasListComponent,
    ModelosFormComponent,
    ModelosListComponent,
    RolesFormComponent,
    RolesListComponent,
    TipoMotorFormComponent,
    TipoMotorListComponent,

  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DepartamentosModule,
    EstatusServicioModule,
    MarcasModule,
    ModelosModule,
    RolesModule,
    TiposMotorModule,
    SharedModule
  ]
})
export class CatalogosModule { }
