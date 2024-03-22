import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { CustomersService } from 'src/app/core/services/customers.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-recepcion-customers-vehicle',
  templateUrl: './recepcion-customers-vehicle.component.html',
  styleUrls: ['./recepcion-customers-vehicle.component.css']
})
export class RecepcionCustomersVehicleComponent implements OnInit {
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

    this.getCustomer(this.customer.idCliente);
  console.log('customerId', this.customer);
}


getCustomer(id: number = 0){
  if(id>0){
    this.customerService.getVehiclesByCustomerId(id).subscribe({
      next: resp=>{
        console.log('vehicles',resp);
        this.vehicles = resp;
      }
    })
  }
}



ver(id: number){
  this.router.navigate(['admin/recepcion/vehiculos/' + id]);
}


}
