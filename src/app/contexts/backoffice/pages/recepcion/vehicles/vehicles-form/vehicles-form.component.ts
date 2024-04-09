import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Button } from 'src/app/core/interfaces/button.interface';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { TipoMotor } from 'src/app/core/interfaces/tipoMotor.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { CustomersService } from 'src/app/core/services/customers.service';
import { MarcasService } from 'src/app/core/services/marcas.service';
import { ModelossService } from 'src/app/core/services/modelos.service';
import { TipoMotorService } from 'src/app/core/services/tipoMotor.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css']
})
export class VehiclesFormComponent implements OnInit {
  showSpinner: boolean = false;
  params: any;
  vehicle: Vehiculo = {modelo:{marca:{} as Marca} as Modelo} as Vehiculo;
  marcas: Marca[]=[];
  modelos: Modelo[] = [];
  customer: Customer = {} as Customer;
  tiposMotor: TipoMotor[] = [];
  title: string = 'Recepcion';
  subTitle: string = 'Agregar Vehiculo';
  buttons =[];
  messages: Toast[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marcasService: MarcasService,
    private tiposMotorService: TipoMotorService,
    private customersService: CustomersService,
    private vehiclesService: VehiclesService,
    private modelsService: ModelossService
  ){}



  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);
    this.customer.idCliente = this.params.get('idCustomer');
    this.vehicle.idVehiculo = this.params.get('idVehicle');
    console.log(this.params.params.id);

    if(this.customer.idCliente>0){
      this.customersService.getById(this.customer.idCliente).subscribe({
        next: (customer: Customer)=>{
          customer.vehiculos = [];
          this.customer = customer;
          this.vehicle.cliente = customer;
        }
      })
    }
    if(this.vehicle.idVehiculo>0){
      this.vehiclesService.get(this.vehicle.idVehiculo).subscribe({
        next: (vehicle: Vehiculo)=>{
          console.log('vehicle', vehicle)
          this.vehicle = vehicle;
          this.customersService.currentCustomer.subscribe({
            next: resp=>{
              this.vehicle.cliente = resp;
            }
          })
        }
      })
    }

    this.marcasService.getAll().subscribe({
      next: (marcas: Marca[])=>{
        console.log('marcas', marcas)
        this.marcas = marcas;
      }
    });
    this.tiposMotorService.getAll().subscribe({
      next: (tiposMotor: TipoMotor[])=>{
        this.tiposMotor = tiposMotor;
      }
    })


  }

  loadModels(id: any){
    id = id.split(': ')[1];
    console.log('modelos', id);
    if (id>=0)
    this.modelsService.getByIdMarca(id).subscribe({
      next: (modelos: Modelo[])=>{
        console.log('modelos', modelos, id)
        this.modelos = modelos
      }
    })
  }

  save(){
    console.log('vehicle', this.vehicle);
    this.vehiclesService.saveOrUpdate(this.vehicle).subscribe({
      next: resp=>{
        this.messages.push({ title: "Sistema", timeAgo: "", body: "Registro Grabado", type: "success" })

      }
    })
  }


}

// title: string;
//   timeAgo: string;
//   body: string;
//   type?: string;

// {
//   "vin":"555555624",
//   "matricula":"HHA2345",
//   "modelo":{
//       "idModelo":471
//   },
//   "anioModelo":2018,
//   "color": "Azul",
//   "tipoMotor": {
//       "idTipoMotor":1
//   },
//   "imagen": "",
//   "cliente":{
//       "idCliente":1
//   }
// }


// {
//   "cliente": {
//     "idCliente": 1,
//     "nombre": "juanito",
//     "apellidoPaterno": "martinez",
//     "apellidoMaterno": "perez",
//     "domicilio": "desconocido",
//     "telefono": "6865632378",
//     "usuario": {
//       "idUsuario": 1,
//       "email": "juan@server",
//       "password": "1234",
//       "rol": []
//     },
//     "vehiculos": []
//   },
//   "modelo": {
//     "idTipoMotor": 1,
//     "tipoMotor": "gasolina"
//   },
//   "vin": "1f232342334kkjkl2k",
//   "matricula": "5768ddf1",
//   "anioModelo": "2016",
//   "color": "blanco"
// }



