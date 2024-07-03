import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/core/interfaces/usuario.interface';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { LoginService } from 'src/app/core/modules/auth/services/login.service';
import { CustomersService } from 'src/app/core/services/customers.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-garage-vehicle-list',
  templateUrl: './garage-vehicles-list.component.html',
  styleUrls: ['./garage-vehicles-list.component.css'],
})
export class GarageVehiclesListComponent implements OnInit{
  isLoading: boolean = false;
  vehicles: any;
  pathVehicle: string = "/mi-garage/mi-vehiculo"
  constructor(
    private renderer: Renderer2,
    private router: Router,
    private customersService: CustomersService,
    private loginService: LoginService){}


  ngOnInit(): void {
    this.renderer.addClass(document.body, 'bg');

    this.loadVehicles()
   }

   loadVehicles():number{
    this.isLoading = true;
    let customerId: number = 0;
    this.loginService.currentUser().subscribe({
      next: (resp: User)=>{
        customerId = resp.idCliente;
        this.customersService.getVehiclesByCustomerId(resp.idCliente).subscribe({
          next: resp=>{
            this.isLoading=false
            this.vehicles = resp;
            console.log(resp)
            console.log(this.vehicles)
          },
          error: ()=> this.isLoading =false
        })
      },
      error: ()=> this.isLoading=false
    })
    console.log("customerId",customerId)
    return customerId
   }

  viewCar(id: number){
    this.router.navigateByUrl('/mi-vehiculo/' + id);

  }

}






