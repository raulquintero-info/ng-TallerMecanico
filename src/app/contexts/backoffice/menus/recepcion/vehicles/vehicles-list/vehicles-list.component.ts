import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from 'src/app/core/services/vehicles.service';
import { Customer } from '../../../../../../core/interfaces/customers.interface';
import { CustomersService } from '../../../../../../core/services/customers.service';
import { ToastService } from 'src/app/core/modules/toast/services/toast.service';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
  displayStyle: string = 'none';
  isLoading: boolean = true;
  pdfFile: string = '';
  title: string = 'Recepcion';
  subTitle: string = 'Lista de Vehiculos'
  customer: Customer = {} as Customer;
  buttons = [
    { text: "PDF *", path: "/admin/recepcion/vehiculos-pdf" },
  ];
  vehicle: Vehiculo = { modelo:{modelo:'',marca:{marca:''}}} as Vehiculo;
  vehicles: Vehiculo[] = [];
  pathVehicle: string = "/admin/recepcion/vehiculos";
  params: any;

  currentPage: number = 1;
  totalPages: number = 1;

  paginador: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehiclesService: VehiclesService,
    private customerService: CustomersService,
    private toastService: ToastService
  ) { }



  ngOnInit() {
    this.route.paramMap.subscribe(params => this.params = params);
      this.loadVehicles(this.currentPage - 1)
    console.log('customerId', this.customer);
  }

  deleteById(id: number) {
    console.log('id view', id);
    this.vehiclesService.deleteById(id).subscribe({
      next: (resp: any) => {
        this.loadVehicles(this.currentPage - 1);
        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Registro Eliminado', type: 'warning' })
      },
      error: (resp: any) => {
        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Registro no pudo ser eliminado', type: 'danger' })
      }
    });
  }

  seleccById(vehicle: Vehiculo) {

    this.openPopup(vehicle);
  }

  getCustomer(id: number = 0) {
    if (id > 0) {
      this.customerService.getById(id).subscribe({
        next: resp => {
          console.log('customer', resp);
          this.customer = resp[0] as Customer;
          this.vehicles = this.customer.vehiculos;
        }
      })
    }
  }

  loadVehicles(page :number) {
    this.vehiclesService.getPaginatedData(page).subscribe({
      next: resp => {
        console.log(resp);
        this.vehicles = resp.content;

        this.totalPages = resp.totalPages;
        this.currentPage = resp.number + 1;
        this.isLoading = false;

      },
      error: resp=>{
        this.isLoading = false;
      }
    })
  }

  onPageChange(page: number) {
    this.loadVehicles(page - 1);

  }
  ver(id: number) {
    this.router.navigate(['admin/recepcion/vehiculos/' + id]);
  }

  openPopup(vehicle: Vehiculo) {
    this.vehicle = vehicle;
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
