import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';
import { Marca } from '../../../../../../core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { TipoMotor } from 'src/app/core/interfaces/tipoMotor.interface';
import { CustomersService } from '../../../../../../core/services/customers.service';

@Component({
  selector: 'app-recepcion-vehicle',
  templateUrl: './recepcion-vehicle.component.html',
  styleUrls: ['./recepcion-vehicle.component.css']
})
export class RecepcionVehicleComponent  implements OnInit{
  ordenesDeServicio: OrdenServicio[] =[{} as OrdenServicio]
  ordenesActivas: OrdenServicio[] = [{} as OrdenServicio]
  fechaEntrada: string = '';
  enableAddButton: string = '';
  pathEdit: string = "/admin/recepcion/vehiculos/form";
  vehicle: Vehiculo = {
    cliente:{nombre:'', apellidoMaterno: '', apellidoPaterno: ''} as Customer,
    modelo: { marca: {}as Marca} as Modelo,
    tipoMotor: {tipoMotor: ''} as TipoMotor,
  } as Vehiculo;
  params: any;
  // pathVehicle: string = "/mi-garage/servicio";
  pathVehicle: string = "/admin/recepcion/servicios";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehiclesService: VehiclesService,
    private servicesService: ServicesService,
    private customersService: CustomersService,
    ){}

  ngOnInit(){

    this.route.paramMap.subscribe(params => {
      this.params = params
      this.vehicle.idVehiculo = this.params.get('id');
      // this.getServicesOrder(this.vehicle.idVehiculo);
      this.getVehicle(this.vehicle.idVehiculo);
    });




  }

  getVehicle(id: number){
    this.vehiclesService.getOrdenesByIdVehicle(id).subscribe({
      next: (resp:Vehiculo)=>{
        console.log('vehiculos',resp)
        this.vehicle = resp;

        this.ordenesActivas = this.vehicle.ordenServicio;
        this.ordenesActivas = this.ordenesActivas.filter((x)=> x.estatusServicio.idEstatusServicio != 6);
        console.log('OA',this.ordenesActivas, this.enableAddButton)
        if(this.ordenesActivas.length>0) {
          this.enableAddButton = 'disabled';
          this.fechaEntrada = this.ordenesActivas[0].fechaOrden;
        }
        else this.enableAddButton = '';
      },
      error: resp => {
        this.router.navigateByUrl("not-found", {skipLocationChange: true});

      }
    });
  }

  // getServicesOrder(id: number){
  //   this.servicesService.getAllByIdVehicle(id).subscribe({
  //     next: resp=>{
  //       this.ordenesDeServicio = resp;
  //       console.log(this.ordenesDeServicio);
  //     }
  //   });
  //   document.querySelector('#newComment');
  // }

  selCustomer(customer: Customer){
    this.customersService.setCurrentCustomer(customer);
    this.router.navigateByUrl('/admin/recepcion/clientes-view/' + customer.idCliente)
  }

  navigate(path: string){
    this.router.navigate([path])
  }
regresar(){
  this.router.navigate(['dashboard'])
}

print(){
  window.print();
}

}
