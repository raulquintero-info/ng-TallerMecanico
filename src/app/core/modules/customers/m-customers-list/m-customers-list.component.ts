import { Component, Input } from '@angular/core';
import { Customer } from '../../../interfaces/customers.interface';

@Component({
  selector: 'app-m-customers-list',
  templateUrl: './m-customers-list.component.html',
  styleUrls: ['./m-customers-list.component.css']
})
export class MCustomersListComponent {
  @Input() customers: Customer[] = [];
  @Input() pathService: String ="";



}
