import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../../../../../../core/services/customers.service';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { VehiclesService } from '../../../../../../core/services/vehicles.service';
import { ToastService } from '../../../../../../core/modules/toast/services/toast.service';
import { switchMap } from 'rxjs';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})
export class CustomersViewComponent {
  isLoading: boolean = true;
  title: string = "Cliente";
  subTitle: string = "<cliente apellido>";
  params: any;
  customer: Customer = {nombre:'', apellidoPaterno:'', vehiculos:[] as Vehiculo[]} as Customer;
  vehicles: Vehiculo[] = [];
  services: any;
  openServices: any;
  buttons = [{text: "Clientes", path: "/admin/recepcion/clientes"}];
  pathVehicle: string ="/admin/recepcion/vehiculos";
  pathService="/admin/recepcion/servicios-view";
  errorMessage: string='';
  messages: Toast[] = [];

  private activatedRoute = inject(ActivatedRoute);
  private customersService = inject(CustomersService);
  private servicesService = inject(ServicesService);
  private router = inject(Router);
  private vehiclesService = inject(VehiclesService);
  private toastsService = inject(ToastService);

  ngOnInit(){

    this.activatedRoute.params.subscribe(({id}) => {
      this.getCustomer(id);
      this.getVehicles(id);
    });



  }

  getCustomer(id: number){
    this.customersService.getById(id).subscribe({
      next: (customer: Customer)=>{
        this.customer = customer;
        console.log(this.customer);
        this.isLoading = false;

      },
      error: resp=>{
        this.isLoading=false;
        this.errorMessage = 'Hubo un problema al tratar de obtener la informacion';
      }
    })
  }

  getVehicles(id: number){
    this.customersService.getVehiclesByCustomerId(id).subscribe({
      next: resp=>{
        console.log('vehiculos', resp, id);
        this.vehicles = resp;
        this.getServices();
      }
    })
  }

  getServices(){
    this.servicesService.getAll().subscribe({
      next: resp=>{
        let idCliente = this.customer.idCliente;
        resp = resp.filter(function(element:OrdenServicio){
          return element.estatusServicio.idEstatusServicio != 6 && element.vehiculo?.cliente.idCliente == idCliente
        })
        this.services = resp;
        console.log('services',resp);

      }
    })

  }

  deleteVehicleById(id: number){
    this.vehiclesService.deleteById(id).subscribe({
      next: resp=>{
        console.log("registro eliminado", resp);
        this.toastsService.addMessage({ title: "Sistema", timeAgo: "", body: 'Registro ' + id + ' Eliminado', type:'success' });

        this.getVehicles(this.customer.idCliente);
      },
      error: resp=>{
        this.toastsService.addMessage({ title: "Sistema", timeAgo: "", body: 'No se ha podido Borrar este registro', type:'danger' });
      }
    });
  }

}
