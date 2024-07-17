import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';

@Component({
  selector: 'app-m-services-list',
  templateUrl: './m-services-list.component.html',
  styleUrls: ['./m-services-list.component.css']
})
export class MServicesListComponent {
  @Input() pathService: String ="";
  @Input() services: OrdenServicio[] =[];
  @Input() customer?: Customer;

  constructor(private router: Router){}

  verServicio(id: number){
    this.router.navigate([this.pathService + '/' + id]);
  }
}
