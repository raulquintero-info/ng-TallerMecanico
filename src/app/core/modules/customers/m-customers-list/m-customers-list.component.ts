import { Component, Input, inject } from '@angular/core';
import { Customer } from '../../../interfaces/customers.interface';
import { CustomersService } from 'src/app/core/services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from 'src/app/core/interfaces/toast.interface';

@Component({
  selector: 'app-m-customers-list',
  templateUrl: './m-customers-list.component.html',
  styleUrls: ['./m-customers-list.component.css']
})
export class MCustomersListComponent {
  @Input() customers: Customer[] = [];
  @Input() pathService: String = "";
  messages: Toast[] = []

  private customersService = inject(CustomersService);
  private router = inject(Router);

  setCurrentCustomer(customer: Customer) {
    this.customersService.setCurrentCustomer(customer);
    this.router.navigateByUrl('/admin/recepcion/clientes-view/' + customer.idCliente);
  }


  delete(id: number){
    this.customersService.delete(id).subscribe({
      next: resp=>{
        console.log("eliminar registro");
        alert("El registro fue Elimindado!");
        // this.router.navigateByUrl("'/recepcion/clientes'");
      },
      error: resp=>{
        this.messages.push({ title: "Sistema", timeAgo: "", body: 'No se ha podido Borrar este registro', type:'danger' });
      }
    });
  }


}
