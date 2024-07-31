import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainLoaderService {

  currentStatus: BehaviorSubject<string> = new BehaviorSubject<string>('ocultar');

  get status(): Observable<string> {
    return this.currentStatus.asObservable();
  }


  setStatus(status:string){
    this.currentStatus.next(status);
  }

  currentUser(): Observable<string> {
    return this.currentStatus
  }

}
