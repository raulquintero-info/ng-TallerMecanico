import { Component, inject } from '@angular/core';
import { Toast } from './core/interfaces/toast.interface';
import { ToastService } from './core/modules/toast/services/toast.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { MainLoaderService } from './core/services/mainLoader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-Taller-Mecanico';
  messages: Toast[] = [];
  statusLoader: string = '';
  private toastService = inject(ToastService);
  private mLoaderService = inject(MainLoaderService);

  constructor() {
    console.log(environment.production?'envioronment: Production' : 'envioronment: Development'); // Logs false for development environment
  }

  ngOnInit(){

    this.mLoaderService.currentUser().subscribe(resp => {
      console.log(resp)
      this.statusLoader = resp;
    })



    this.toastService.messages.subscribe({
      next: toasts=>{
        this.messages = toasts;
      }
    });




  }

}
