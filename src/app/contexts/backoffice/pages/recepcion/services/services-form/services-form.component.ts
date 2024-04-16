import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { EstatusServicio } from 'src/app/core/interfaces/estatusServicio.interface';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { ToastService } from 'src/app/core/modules/toast/services/toast.service';
import { CustomersService } from 'src/app/core/services/customers.service';
import { EstatusService } from 'src/app/core/services/estatusService.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.css']
})
export class ServicesFormComponent implements OnInit {
  title: string = 'Recepcion';
  subTitle: string = 'Crear Servicio'
  buttons = [{ text: 'Servicios', path: "/admin/recepcion/servicios-form/0" }];

  currentCustomer: Customer = {} as Customer;
  service: OrdenServicio = {falla: '', idOrdenServicio: 0} as OrdenServicio;
  pathEdit: string = "/admin/recepcion/vehiculos/form";
  vehicle: Vehiculo = {} as Vehiculo;
  params: any;
  // pathVehicle: string = "/mi-garage/servicio";
  pathVehicle: string = "/admin/recepcion/servicios";

  constructor(
    private route: ActivatedRoute,
    private vehiclesService: VehiclesService,
    private customersService: CustomersService,
    private servicesService: ServicesService,
    private toastService: ToastService,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.params = params);
    this.vehiclesService.get(this.params.params.idVehiculo).subscribe({
      next: resp => {
        console.log('vehiculos', resp)
        this.vehicle = resp;

      }
    });
    if (this.params.params.id > 0)
      this.getServiceById();
    else {
      this.service.comentarios = this.getDate() + '\n>'
    }
    this.customersService.currentCustomer.subscribe({
      next: (currentCustomer: Customer) =>{
        this.currentCustomer = currentCustomer;
      }
    });

  }
  save(){
    this.vehicle.cliente = this.currentCustomer;
    this.vehicle.ordenServicio = [];
    this.service.vehiculos =  {idVehiculo:this.vehicle.idVehiculo} as Vehiculo;
    this.service.estatusServicio = {idEstatusServicio:1} as EstatusServicio;
    this.service.fechaOrden = new Date().toUTCString();
    console.log('servicio enviado', this.service);
    this.servicesService.saveOrUpdate(this.service).subscribe({
      next: resp=>{
        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Servicio Grabado', type: 'success' })
        console.log('servicio resp', resp);
        this.service = resp.OrdenDeServicio;
        this.router.navigate(['admin/recepcion/servicios-view/'+resp.OrdenDeServicio.idOrdenServicio +'/' + this.vehicle.idVehiculo]);
      },
      error: resp=>{
        console.log('error', resp)
      }
    });
  }

  getServiceById(){
    //todo: para obtener la orden de servicio a editar
  }

  getDate(): string{
    return formatDate(new Date(), 'yyyy-MM-dd HH:mm', 'en-US');
    // return `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()} ${fecha.getTime()}`;
  }

  navigate(path: string) {
    // this.router.navigate([path])
  }
  regresar() {
    this.router.navigate(['dashboard'])
  }

  print() {
    window.print();
  }



}
