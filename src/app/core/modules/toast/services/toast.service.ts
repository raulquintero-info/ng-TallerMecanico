import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Toast } from 'src/app/core/interfaces/toast.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  messagesList: BehaviorSubject<Toast> = new BehaviorSubject<Toast>({} as Toast);

  constructor() { }


  get messages(): Observable<Toast> {
    return this.messagesList.asObservable();
  }

  addMessage(message: Toast){
    this.messagesList.next(message);
  }

}
