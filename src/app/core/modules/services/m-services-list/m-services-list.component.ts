import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-services-list',
  templateUrl: './m-services-list.component.html',
  styleUrls: ['./m-services-list.component.css']
})
export class MServicesListComponent {
  @Input() pathService: String ="";
  @Input() services: any =[];

  constructor(private router: Router){}

  verServicio(id: number){
    this.router.navigate([this.pathService + '/' + id]);
  }
}
