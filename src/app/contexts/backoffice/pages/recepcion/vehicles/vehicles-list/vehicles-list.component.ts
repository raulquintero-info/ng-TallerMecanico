import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from 'src/app/core/services/vehicles.service';
import { Customer } from '../../../../../../core/interfaces/customers.interface';
import { CustomersService } from '../../../../../../core/services/customers.service';
import { ToastService } from 'src/app/core/modules/toast/services/toast.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
  title: string = 'Recepcion';
  subTitle: string = 'Lista de Vehiculos'
  customer: Customer = {} as Customer;
  buttons = [{text: "Agregar", path: "/admin/recepcion/vehiculos-form/0"}];
  vehicles: any;
  pathVehicle: string ="/admin/recepcion/vehiculos";
  params: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehiclesService: VehiclesService,
    private customerService: CustomersService,
    private toastService: ToastService
    ){}



ngOnInit(){
  this.route.paramMap.subscribe(params => this.params = params);
  this.customer.idCliente = (this.params.params.id>0 ?  this.params.params.id : 0);
  console.log('params',this.params);
  if(!this.customer.idCliente)
    this.getall()
  else
    this.getCustomer(this.customer.idCliente);
  console.log('customerId', this.customer);
}

deleteById(id: number){
  console.log('id view', id);
  this.vehiclesService.deleteById(id).subscribe({
    next: (resp: any)=>{
      this.getall();
      this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Registro Eliminado', type: 'warning' })
    },
    error: (resp: any)=>{
      this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Registro no pudo ser eliminado', type: 'danger' })
    }
  });
}
getCustomer(id: number = 0){
  if(id>0){
    this.customerService.getById(id).subscribe({
      next: resp=>{
        console.log('customer',resp);
        this.customer = resp[0] as Customer;
        this.vehicles = this.customer.vehiculos;
      }
    })
  }
}

getall(){
  this.vehiclesService.getAll().subscribe({
    next: resp=>{
      console.log(resp);
      this.vehicles = resp;
    }
  })
}

ver(id: number){
  this.router.navigate(['admin/recepcion/vehiculos/' + id]);
}


}
