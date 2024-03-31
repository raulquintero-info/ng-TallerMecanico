import { Component, Input, inject } from '@angular/core';
import { Customer } from '../../../interfaces/customers.interface';
import { CustomersService } from 'src/app/core/services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-m-customers-list',
  templateUrl: './m-customers-list.component.html',
  styleUrls: ['./m-customers-list.component.css']
})
export class MCustomersListComponent {
  @Input() customers: Customer[] = [];
  @Input() pathService: String = "";

  private customersService = inject(CustomersService);
  private router = inject(Router);

  setCurrentCustomer(customer: Customer) {
    this.customersService.setCurrentCustomer(customer);
    this.router.navigateByUrl('/admin/recepcion/clientes-view/' + customer.idCliente);
  }

}
