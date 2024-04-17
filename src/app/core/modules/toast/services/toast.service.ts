import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Toast } from 'src/app/core/interfaces/toast.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  messagesList: BehaviorSubject<Array<Toast>> = new BehaviorSubject<Toast[]>([]);

  constructor() { }


  get messages(): Observable<Toast[]> {
    return this.messagesList.asObservable();
  }

  addMessage(message: Toast){
    let  tempList = this.messagesList.value;
    message.timeAgo = Date();
    tempList.push(message);
    this.messagesList.next(tempList);
    setInterval(()=>{

      tempList.shift();
      this.messagesList.next(tempList);
    },15000);
  }

}
