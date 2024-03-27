import { Component, Input } from '@angular/core';
import { Toast } from 'src/app/core/interfaces/toast.interface';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent  {
  @Input() toasts: Toast[] = [] ;



}
