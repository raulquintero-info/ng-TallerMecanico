import { Component, OnInit, inject } from '@angular/core';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { UserssService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  title: string = "Sistema";
  subTitle: string = "Lista de Usuarios";
  buttons = [
    // {text: "Agregar", path: "/admin/sistema/empleados-form/0"}
  ];
  users: User[] = [];
  messages: Toast[] = [];

  private usersService = inject(UserssService);

  ngOnInit(){

    this.loadEmployees();

  }

  loadEmployees(){
    this.usersService.getAll().subscribe({
      next: resp=>{
        this.users = resp;
      }
    })
  }

  deleteById(id: number){
    this.usersService.deleteById(id).subscribe({
      next: resp=>{
        this.loadEmployees();
        this.messages.push({ title: "Sistema", timeAgo: "", body: ' Registro Eliminado', type: 'warning' })
      },
      error: resp=>{
        console.log('resp error', resp);
        this.messages.push({ title: "Sistema", timeAgo: "", body: ' Registro no pudo ser eliminado', type: 'danger' })
      }
    });
  }

  onDeleteById(id: number){
    this.deleteById(id);
  }

}
