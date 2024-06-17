import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      // {path: 'acerca-de', component: },
      // {path: 'equipo', component: },
      // {path: 'contactanos', component: },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicofficeRoutingModule { }
