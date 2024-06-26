import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Button } from 'src/app/core/interfaces/button.interface';
import { EstatusService } from 'src/app/core/services/estatusService.service';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';
import { EstatusServicio } from 'src/app/core/interfaces/estatusServicio.interface';
import { formatDate } from '@angular/common';
import { ToastService } from 'src/app/core/modules/toast/services/toast.service';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { CustomersService } from '../../../../../../core/services/customers.service';
import { DetalleOrdenServicios } from 'src/app/core/interfaces/detalleOrdenServicios.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-services-view',
  templateUrl: './services-view.component.html',
  styleUrls: ['./services-view.component.css']
})
export class ServicesViewComponent implements OnInit {
  displayStyle: string = 'none';
  idService: number = 0;
  total: number = 0;
  displayStyleDelete: string = 'none';
  isLoadingService = true;
  showBoxComment: boolean = false;
  showBoxAddItem: boolean = false;
  showBoxDelete: boolean = false;
  item: DetalleOrdenServicios = {ordenServicio: {idOrdenServicio:0}as OrdenServicio } as DetalleOrdenServicios;
  title: string = 'Taller AutoPro';
  subTitle: string = 'Orden de Servicio'
  buttons = [
    {text: 'Servicios', path: "/admin/recepcion/vehiculos/1"}
  ];

  currentCustomer: Customer = {} as Customer;
  service: OrdenServicio = { idOrdenServicio: 0, estatusServicio: {idEstatusServicio:0} as EstatusServicio } as OrdenServicio;
  vehicle: Vehiculo = { modelo: { marca: {} as Marca } as Modelo } as Vehiculo;
  servicio: OrdenServicio = {} as OrdenServicio;
  statusList: EstatusServicio[] = []
  params: any;
  newComment: string = '';

  private statusService = inject(EstatusService);
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private vehiclesService: VehiclesService,
    private servicesService: ServicesService,
    private toastService: ToastService,
    private customersService: CustomersService,
  ) { }

  ngOnInit(): void {
    // this.isLoadingService = true
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) =>  this.servicesService.getById(id))
      )
      .subscribe({
        next: resp => {
          console.log('servicio cargado', resp)
          this.isLoadingService = false;
          //TODO: revisar por que el back end regresa nulo con codigo 200 en vez de 404
          if (resp!=null){
            this.service = resp;
            this.vehicle = resp.vehiculo;
          }else {
            this.router.navigateByUrl("not-found", {skipLocationChange: true});
          }

          let tot=0;
          // this.service.detalleOrdenServicios.forEach(function(a){tot += a.costo;});
          this.total= tot;

          // this.total = this.service.detalleOrdenServicios.reduce((a, b) => a + b.costo, 0)
          // if (this.service.idOrdenServicio<1)

        },
        error: resp=>{
          console.log('error');
          // this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: "No se pudo cargar la informacion", type:'danger' })
          this.isLoadingService = false;

          this.router.navigateByUrl("not-found", {skipLocationChange: true});
        }
      } );



    this.statusService.getAll().subscribe({
      next: resp => {
        this.statusList = resp;
      }
    });



  }

  loadService(id:number) {
    this.isLoadingService = true
    this.servicesService.getById(id).subscribe({
      next: resp => {
        console.log('servicio cargado', resp)
        this.service = resp;
        this.vehicle = resp.vehiculo;
        this.isLoadingService = false;

        let tot=0;
        // this.service.detalleOrdenServicios.forEach(function(a){tot += a.costo;});
        this.total= tot;

        // this.total = this.service.detalleOrdenServicios.reduce((a, b) => a + b.costo, 0)
        // if (this.service.idOrdenServicio<1)

      },
      error: resp=>{
        console.log('error');
        // this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: "No se pudo cargar la informacion", type:'danger' })
        this.isLoadingService = false;

        this.router.navigateByUrl("not-found", {skipLocationChange: true});
      }

    });

  }

  addItem(){
    console.log('agregando item', this.item)
    this.item.ordenServicio.idOrdenServicio = this.service.idOrdenServicio;
    this.servicesService.addItem(this.item).subscribe({
      next: resp =>{
        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: "Producto/Sericio Agregado", type:'success' })
        this.showBoxAddItem =false;
        this.loadService(this.service.idOrdenServicio);
        console.log('loadService: ', this.service.idOrdenServicio);
        this.item = {ordenServicio: {idOrdenServicio:0}as OrdenServicio } as DetalleOrdenServicios;


      },
      error: resp=>{
        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: "No se pudo agregar el item", type:'danger' })

      }
    });
  }

  deleteItem(id: number){
    console.log('eliminar item')
    this.servicesService.deleteItem(id).subscribe({
      next: resp=>{

        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: "Producto/Servicio Eliminado", type:'warning' })
        this.loadService(this.service.idOrdenServicio);
      }
    });
  }


  displayBoxComment() {
    this.showBoxComment=true;
    this.service.comentarios = (this.service.comentarios==null) ? '' : this.service.comentarios;
    this.newComment = this.getDate() + '\n> \n\n'+ this.service.comentarios;
  }


  getDate(): string{
    return formatDate(new Date(), 'yyyy-MM-dd HH:mm', 'en-US');
  }

  addComment(){
    this.newComment = this.service.comentarios ;
    this.save('Comentario Agregado')
    this.showBoxComment = false;
  }

  updateStatus(){

    this.save('Estatus Actualizado')
  }

  save(message: string){
    this.service.vehiculo!.ordenServicio =[];

    this.servicesService.saveOrUpdate(this.service).subscribe({
      next: resp=>{
        // debugger
        console.log('response service',resp)
        this.service=resp.ordenServicio;
        this.service.vehiculo = this.vehicle
        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: message, type:'success' })
      },
      error: (resp: any)=>{
        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Hubo un problema al tratar de Grabar', type:'danger' })
        console.log('error',resp);

      }
    });
  }

  compareStatus(item1: any, item2: any) {

    return item1 && item2 ? item1.idOrdenServicio === item2.idOrdenServicio : item1 === item2;
  }

  facturar(){
    this.router.navigateByUrl('/admin/recepcion/facturas-view/1');
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  openModalDelete() {
    this.displayStyleDelete = "block";
  }
  closeModalDelete(){
    this.displayStyleDelete = "none";
  }
  onDelete(id: number){
    this.servicesService.deleteById(id).subscribe({
      next: resp=>{
        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Se ha eliminado el servicio: ' + this.service.idOrdenServicio , type:'warning' })
        this.router.navigateByUrl('/admin/recepcion/vehiculos/'+ this.vehicle.idVehiculo);
      },
      error: resp=>{
        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' No se ha podido eliminar este servicio', type:'danger' })

      }
    })
  }
}
