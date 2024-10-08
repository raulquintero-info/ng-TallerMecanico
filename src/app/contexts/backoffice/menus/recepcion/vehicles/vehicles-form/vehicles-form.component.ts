import { animation } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Button } from 'src/app/core/interfaces/button.interface';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { TipoMotor } from 'src/app/core/interfaces/tipoMotor.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { ToastService } from 'src/app/core/modules/toast/services/toast.service';
import { CustomersService } from 'src/app/core/services/customers.service';
import { MarcasService } from 'src/app/core/services/marcas.service';
import { ModelossService } from 'src/app/core/services/modelos.service';
import { TipoMotorService } from 'src/app/core/services/tipoMotor.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css'],
})
export class VehiclesFormComponent implements OnInit {
  showSpinner: boolean = false;
  showModalMarca: string = 'display';
  editar: boolean = false;
  idMarca: number = 0;
  marcaSelected: Marca= {} as Marca;
  isSaved: boolean = false;
  isProcessing: boolean = false;
  params: any;
  vehicle: Vehiculo = {
    vin: '',
    matricula: '',
    anioModelo: '2024',
    color: '',
    imagen: '/assets/images/cars/no_image.jpg',
    modelo: { marca: {} as Marca, } as Modelo,
    tipoMotor:{} as TipoMotor,
    cliente: {nombre: '', apellidoPaterno: '' , vehiculos:[{}]} as Customer
  } as Vehiculo;
  imagen: string = '/assets/images/cars/no_image.jpg';
  marcas: Marca[] = [];
  modelos: Modelo[] = [];
  customer: Customer = {} as Customer;
  tiposMotor: TipoMotor[] = [];
  title: string = 'Recepcion';
  subTitle: string = 'Agregar Vehiculo';
  buttons = [];

  @ViewChild('marcasModal', {static: false}) marcasModal?: ElementRef;
  @ViewChild('modelosModal', {static: false}) modelosModal?: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marcasService: MarcasService,
    private tiposMotorService: TipoMotorService,
    private customersService: CustomersService,
    private vehiclesService: VehiclesService,
    private modelsService: ModelossService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer
  ) {}


  vehicleForm = this.formBuilder.group({
    imagen:[''],
    vin: ['', [Validators.required, Validators.minLength(17)]],
    matricula: ['', [Validators.required, Validators.minLength(6)]],
    anio: ['', [Validators.required, Validators.minLength(4)]],
    color: ['', [Validators.required, Validators.minLength(3)]],
    marca: [0, Validators.required],
    modelo : [0, Validators.required],
    tipoMotor: [0, Validators.required],
  });

  ngOnInit() {
    this.route.paramMap.subscribe((params) => (this.params = params));
    // this.customer.idCliente = this.params.get('idCustomer');
    this.vehicle.idVehiculo = this.params.get('idVehicle');
    this.editar = (this.vehicle.idVehiculo ? true : false)
    if(this.vehicle.idVehiculo>0) this.subTitle = "Editar Vehiculo"
    console.log(this.params.params.id);




    if (this.vehicle.idVehiculo > 0) {
      this.vehiclesService.getOrdenesByIdVehicle(this.vehicle.idVehiculo).subscribe({
        next: (vehicle: Vehiculo) => {
          console.log('vehicle', vehicle);
          this.vehicle = vehicle;
          this.vehicle.ordenServicio = [];

          this.modelsService
            .getByIdMarca(vehicle.modelo.marca.idMarca)
            .subscribe({
              next: (modelos: Modelo[]) => {
                this.modelos = modelos;
              },
            });

          // Cargar los datos al formulario
          this.vehicleForm.patchValue({
            vin: vehicle.vin,
            matricula: vehicle.matricula,
            anio: vehicle.anioModelo,
            color: vehicle.color,
            marca: vehicle.modelo.marca.idMarca,
            modelo: vehicle.modelo.idModelo,
            tipoMotor: vehicle.tipoMotor.idTipoMotor
        });

        },
      });
    } else {
      this.vehicleForm.get('modelo')?.disable();

    }

    let temp = localStorage.getItem('customer');
    this.customer = JSON.parse(<string>temp);
    console.log('customer', temp, this.customer);
    // TODO: activar cuando el login y security esten funcionand
    this.customersService.currentCustomer.subscribe({
      next: resp=>{
        // this.console
        this.vehicle.cliente = resp;
      }
    })


    this.loadMarcas();


    this.tiposMotorService.getAll().subscribe({
      next: (tiposMotor: TipoMotor[]) => {
        this.tiposMotor = tiposMotor;
      },
    });
  }
  loadMarcas(){
    this.marcasService.getAll().subscribe({
      next: (marcas: Marca[]) => {
        console.log('marcas', marcas)
        this.marcas = marcas;
        console.log('enable modelo')

      }
    });
  }
  loadModels(id: any, idModelo: number = 0) {
    //id = id.split(': ')[1];
    this.idMarca = id;
    console.log('modelos', id);
    if (id > 0)
      this.modelsService.getByIdMarca(id).subscribe({
        next: (modelos: Modelo[]) => {
          console.log('modelos', modelos, id);
          this.modelos = modelos;
          this.modelsService.setIdMarca(id);
          console.log('loadIdMarca', this.idMarca);
          this.vehicleForm.get('modelo')?.enable();
          this.vehicleForm.patchValue({
            modelo: idModelo,
        });
        },
      });
  }

  save() {
    this.showSpinner = true;
    if (this.vehicleForm.invalid) {
      // Marcar los controles del formulario como tocados para mostrar los mensajes de error
      this.vehicleForm.markAllAsTouched();
      this.showSpinner = false; // Detener el spinner
      return; // Detener el proceso de guardado
    }
    console.log('vehicle', this.vehicle);
    this.vehicle.vin = this.vehicleForm.value.vin!;
    this.vehicle.matricula = this.vehicleForm.value.matricula!;
    this.vehicle.anioModelo = this.vehicleForm.value.anio!;
    this.vehicle.color = this.vehicleForm.value.color!;
    this.vehicle.tipoMotor.idTipoMotor =this.vehicleForm.value.tipoMotor!;
    this.vehicle.modelo.idModelo = this.vehicleForm.value.modelo!;
    // this.vehicle.cliente.vehiculos = [];

    this.vehiclesService.saveOrUpdate(this.vehicle).subscribe({
      next: (resp) => {
        console.log('resp',resp);
        this.vehicle.idVehiculo = resp.Vehiculo.idVehiculo;
        this.toastService.addMessage({
          title: 'Sistema',
          timeAgo: '',
          body: ' Registro Grabado',
          type: 'success',
        });
        this.isSaved = true;
        this.showSpinner=false;
      },
      error: resp=> {
        console.log('error', resp);
        this.toastService.addMessage({
          title: 'Sistema',
          timeAgo: '',
          body: 'No se pudo grabar el registro',
          type: 'danger',
        });
        this.isSaved=false;
        this.showSpinner= false;
      }
    });
  }

  captureFile(event: any) {
    // this.vehicle.imagen ='/assets/images/cars/' + event.target.files[0].name;
    console.log(event);
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      console.log(imagen)
      this.vehicle.imagen = imagen.base;
    })


  }

  compareMarca(item1: any, item2: any) {
    console.log(item1 + '-' + item2.idMarca);
    return item1 && item2 ? item1.idMarca === item2.idMarca : item1 === item2;
  }

  compareModelo(item1: any, item2: any) {
    return item1 && item2 ? item1.idModelo === item2.idModelo : item1 === item2;
  }



  savedMarca(idMarca:  number = 0){
    this.loadMarcas();
    this.loadModels(idMarca);
    this.vehicleForm.patchValue({
      marca: idMarca,
  });
  (this.marcasModal?.nativeElement as HTMLElement).style.display = 'none'

    console.log('Marca grabada', idMarca)
  }

  showMarcasModal(){
    (this.marcasModal?.nativeElement as HTMLElement).style.display = 'block'
  }
  cancelledMarca(){

    (this.marcasModal?.nativeElement as HTMLElement).style.display = 'none'
  }

  showModeloModal(){
    (this.modelosModal?.nativeElement as HTMLElement).style.display = 'block'
  }
  savedModelo(idModelo:  number = 0){
    console.log('savedModelo',idModelo , this.idMarca)
    this.loadModels(this.idMarca, idModelo);

  (this.modelosModal?.nativeElement as HTMLElement).style.display = 'none'

    console.log('Marca grabada', idModelo)
  }

  cancelledModelo(){

    (this.modelosModal?.nativeElement as HTMLElement).style.display = 'none'
  }



  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try{
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        })
      }
    } catch (e) {
      return null;
    }
    return null;
  })

}

