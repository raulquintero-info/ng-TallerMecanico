import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.css']
})
export class AdminClientesComponent  implements OnInit {
  customers: any;
  params: any;

  constructor(private route: ActivatedRoute,private customersService: CustomersService){}



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
}
