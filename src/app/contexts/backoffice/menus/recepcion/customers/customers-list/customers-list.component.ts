import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  isLoadingCustomers: boolean = true;
  errorMessage: string = '';
  customers: Customer[] = []
  params: any;
  pdfFile: string ='clientes';
  title: string = "Recepcion";
  subTitle: string = "Lista de clientes";
  buttons = [{ text: "Agregar", path: "/admin/recepcion/clientes-form/0" }];

  currentPage: number = 1;
  totalPages: number = 1;

  paginador: any;

  constructor(private route: ActivatedRoute, private router: Router, private customersService: CustomersService) { }



  ngOnInit() {

    this.loadCustomers(this.currentPage - 1)
  }

  loadCustomers(page :number) {
    this.customersService.getPaginatedData(page).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.customers = resp.content;
        this.totalPages = resp.totalPages;
        this.currentPage = resp.number + 1;
        this.isLoadingCustomers = false;
      },
      error: resp => {
        this.isLoadingCustomers = false;
        this.errorMessage = 'Hubo un problema al tratar de obtener la informacion';
      }
    })
  }

  print() {
    window.print();
  }
  verVehiculos() {
    this.router.navigate(['/admin/recepcion/vehiculos']);
  }


  onPageChange(page: number) {
    this.loadCustomers(page - 1);

  }

}
