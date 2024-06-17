import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBackComponent } from './components/navbar-back/navbar-back.component';
import { DashboardBackComponent } from './menus/dashboard-back/dashboard-back.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { TallerModule } from './menus/taller/taller.module';
import { SistemaModule } from './menus/sistema/sistema.module';
import { CatalogosModule } from './menus/catalogos/catalogos.module';
import { RecepcionModule } from './menus/recepcion/recepcion.module';


@NgModule({
    declarations: [
        NavbarBackComponent,
        DashboardBackComponent,

    ],
    exports: [
        NavbarBackComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        BackofficeRoutingModule,

        CatalogosModule,
        SistemaModule,

        TallerModule,
        RecepcionModule,
    ]
})
export class BackofficeModule { }
