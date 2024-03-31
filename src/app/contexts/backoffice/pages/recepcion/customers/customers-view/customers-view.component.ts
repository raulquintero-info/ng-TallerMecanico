import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../../../../../core/services/customers.service';
import { Customer } from 'src/app/core/interfaces/customers.interface';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})
export class CustomersViewComponent {
  title: string = "Cliente";
  subTitle: string = "<cliente apellido>";
  params: any;
  customer: Customer = {} as Customer;
  pathVehicle: string ="/admin/recepcion/vehiculos";

  private route = inject(ActivatedRoute);
  private customersService = inject(CustomersService);


  ngOnInit(){

    this.route.paramMap.subscribe(params => this.params = params);
    this.customer.idCliente = this.params.get('id');

    this.customersService.getById(this.customer.idCliente).subscribe({
      next: (customer: Customer)=>{
        this.customer = customer;
      }
    })


  }



}
