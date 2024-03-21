import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from 'src/app/core/services/vehicles.service';
import { Customer } from '../../../../../../core/interfaces/customers.interface';
import { CustomersService } from '../../../../../../core/services/customers.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
  customer: Customer = {} as Customer;
  vehicles: any;
  pathVehicle: string ="/admin/recepcion/vehiculos";
  params: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehiclesService: VehiclesService,
    private customerService: CustomersService,
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
