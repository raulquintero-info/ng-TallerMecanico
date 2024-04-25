import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../../../../../../core/services/customers.service';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { VehiclesService } from '../../../../../../core/services/vehicles.service';
import { ToastService } from '../../../../../../core/modules/toast/services/toast.service';

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
  services: any;
  openServices: any;
  buttons = [{text: "Clientes", path: "/admin/recepcion/clientes"}];
  pathVehicle: string ="/admin/recepcion/vehiculos";
  pathService="/admin/recepcion/servicios-view";

  messages: Toast[] = [];

  private route = inject(ActivatedRoute);
  private customersService = inject(CustomersService);
  private servicesService = inject(ServicesService);
  private router = inject(Router);
  private vehiclesService = inject(VehiclesService);
  private toastsService = inject(ToastService);

  ngOnInit(){

    this.route.paramMap.subscribe(params => {
      this.params = params
      this.customer.idCliente = this.params.get('id');
      this.getCustomer(this.customer.idCliente);
    });

    this.servicesService.getAll().subscribe({
      next: resp=>{
        this.services = resp;
        console.log('services',resp);

      }
    })


  }

  getCustomer(id: number){
    this.customersService.getById(id).subscribe({
      next: (customer: Customer)=>{
        this.customer = customer;
        console.log(this.customer)
      }
    })
  }

  deleteVehicleById(id: number){
    this.vehiclesService.deleteById(id).subscribe({
      next: resp=>{
        console.log("registro eliminado");
        this.toastsService.addMessage({ title: "Sistema", timeAgo: "", body: 'Registro Eliminado', type:'danger' });

        this.getCustomer(this.customer.idCliente);
      },
      error: resp=>{
        this.toastsService.addMessage({ title: "Sistema", timeAgo: "", body: 'No se ha podido Borrar este registro', type:'danger' });
      }
    });
  }

}
