import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './contexts/guest/home/home.component';
import { NotfoundComponent } from './shared/pages/notfound/notfound.component';

const routes: Routes = [
  {path:'', component: HomeComponent},


  {path: '**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
