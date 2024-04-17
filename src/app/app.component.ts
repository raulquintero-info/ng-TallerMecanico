import { Component, OnInit, inject } from '@angular/core';
import { ToastService } from './core/modules/toast/services/toast.service';
import { Toast } from './core/interfaces/toast.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-Taller-Mecanico';
  messages: Toast[] = [];
  private toastService = inject(ToastService);

  ngOnInit(){

    this.toastService.messages.subscribe({
      next: toasts=>{
        this.messages = toasts;
      }
    });


   


  }


}
