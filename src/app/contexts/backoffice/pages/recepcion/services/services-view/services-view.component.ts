import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Button } from 'src/app/core/interfaces/button.interface';
import { EstatusService } from 'src/app/core/services/estatusService.service';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';
import { EstatusServicio } from 'src/app/core/interfaces/estatusServicio.interface';
import { formatDate } from '@angular/common';
import { ToastService } from 'src/app/core/modules/toast/services/toast.service';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { CustomersService } from '../../../../../../core/services/customers.service';

@Component({
  selector: 'app-services-view',
  templateUrl: './services-view.component.html',
  styleUrls: ['./services-view.component.css']
})
export class ServicesViewComponent implements OnInit {
  showBoxComment: boolean = false;
  title: string = 'Taller AutoPro';
  subTitle: string = 'Orden de Servicio'
  buttons = [
    // {text: 'Servicios', path: "/admin/recepcion/vehiculos/1"}
  ];

  currentCustomer: Customer = {} as Customer;
  service: OrdenServicio = { estatusServicio: {idEstatusServicio:0} as EstatusServicio } as OrdenServicio;
  vehicle: Vehiculo = { modelo: { marca: {} as Marca } as Modelo } as Vehiculo;
  servicio: OrdenServicio = {} as OrdenServicio;
  statusList: EstatusServicio[] = []
  params: any;
  newComment: string = '';

  private statusService = inject(EstatusService);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehiclesService: VehiclesService,
    private servicesService: ServicesService,
    private toastService: ToastService,
    private customersService: CustomersService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.params = params

      this.loadService();
    });

    this.servicesService.getById(this.params.get('id')).subscribe({
      next: resp => {
        console.log('servicio', resp)
        this.service = resp;
      }
    })

    this.vehiclesService.get(this.params.get('idVehiculo')).subscribe({
      next: resp => {
        console.log('vehiculos', resp)
        this.vehicle = resp;
      }
    })

    this.statusService.getAll().subscribe({
      next: resp => {
        this.statusList = resp;
      }
    });

    this.customersService.currentCustomer.subscribe({
      next: (currentCustomer: Customer) =>{
        console.log('currentCustomer', currentCustomer);
        this.currentCustomer = currentCustomer;
      }
    });

  }

  loadService() {
    this.servicesService.getById(this.params.get('id')).subscribe({
      next: resp => {
        console.log('servicio', resp)
        this.service = resp;
      }
    });

  }

  displayBoxComment() {
    this.showBoxComment=true;
    this.service.comentarios = (this.service.comentarios==null) ? '' : this.service.comentarios;
    this.newComment = this.getDate() + '\n> \n\n'+ this.service.comentarios;
  }

  regresar() {
    this.router.navigate(['/vehiculo/' + this.params.params.id]);
  }

  getDate(): string{
    return formatDate(new Date(), 'yyyy-MM-dd HH:mm', 'en-US');
    // return `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()} ${fecha.getTime()}`;
  }

  addComment(){
    this.service.comentarios = this.newComment;
    this.save('Comentario Agregado')
    this.showBoxComment = false;
  }

  updateStatus(){

    this.save('Estatus Actualizado')
  }

  save(message: string){
    this.vehicle.ordenServicio =[];
    this.vehicle.cliente= this.currentCustomer;
    this.service.vehiculo = this.vehicle ;


    console.log('servicio enviado',this.service);
    this.servicesService.saveOrUpdate(this.service).subscribe({
      next: resp=>{
        console.log('response service',resp)
        this.service=resp.OrdenDeServicio;
        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: message, type:'success' })
      },
      error: (resp: any)=>{
        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Hubo un problema al tratar de Grabar', type:'danger' })
        console.log(resp);

      }
    });
  }
}
