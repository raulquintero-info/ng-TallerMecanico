import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{
params: any;
constructor(private route: ActivatedRoute, private router: Router){}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => this.params = params);
  
}

regresar(){
  this.router.navigate(['/vehiculo/' + this.params.params.id] );
}

}
