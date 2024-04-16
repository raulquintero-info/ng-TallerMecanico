import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../auth/interfaces/user.interface';

@Component({
  selector: 'app-m-users-list',
  templateUrl: './m-users-list.component.html',
  styleUrls: ['./m-users-list.component.css']
})
export class MUsersListComponent {
  @Input() users: User[] = [];
  @Input() pathService: String = "";
  @Output() onDeleteId: EventEmitter<number> = new EventEmitter();

  employeeView(id: number) {

    console.log('show users')
  }

  emitDelete(id: number) {
    this.onDeleteId.emit(id);
  }


}

