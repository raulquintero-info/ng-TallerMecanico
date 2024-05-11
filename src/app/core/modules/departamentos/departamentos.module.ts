import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDepartamentosListComponent } from './m-departamentos-list/m-departamentos-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from "../toast/toast.module";



@NgModule({
    declarations: [
        MDepartamentosListComponent
    ],
    exports: [
        MDepartamentosListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule
    ]
})
export class DepartamentosModule { }
