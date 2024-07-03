import { Component, inject } from '@angular/core';
import { Toast } from './core/interfaces/toast.interface';
import { ToastService } from './core/modules/toast/services/toast.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-Taller-Mecanico';
  messages: Toast[] = [];
  private toastService = inject(ToastService);

  constructor() {
    console.log(environment.production?'envioronment: Production' : 'envioronment: Development'); // Logs false for development environment
  }

  ngOnInit(){


    this.toastService.messages.subscribe({
      next: toasts=>{
        this.messages = toasts;
      }
    });




  }

}
