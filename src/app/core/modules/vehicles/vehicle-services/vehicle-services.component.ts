import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-services',
  templateUrl: './vehicle-services.component.html',
  styleUrls: ['./vehicle-services.component.css']
})
export class VehicleServicesComponent {
  @Input() prePath: String ="";

  constructor(private router: Router){}

  verServicio(id: number){
    this.router.navigate([this.prePath + '/servicio/' + id]);
  }
}
