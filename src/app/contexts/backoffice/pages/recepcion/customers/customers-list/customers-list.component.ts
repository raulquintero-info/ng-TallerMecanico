import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: any;
  params: any;
  title: string = "Recepcion";
  subTitle: string = "Lista de clientes";
  buttons = [{text: "Agregar", path: "/admin/recepcion/clientes-form/0"}];

  constructor(private route: ActivatedRoute, private router: Router, private customersService: CustomersService){}



ngOnInit(){

  this.getall()
}

getall(){
  this.customersService.getAll().subscribe({
    next: resp=>{
      console.log(resp);
      this.customers = resp;
    }
  })
}

print(){
  window.print();
}
verVehiculos(){
  this.router.navigate(['/admin/recepcion/vehiculos']);
}

}
