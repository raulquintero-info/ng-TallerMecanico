import { Component, OnInit, inject } from '@angular/core';
import { Page } from 'src/app/core/interfaces/page.interface';
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

  currentPage: number = 1;
  totalPages: number = 1;

  paginador: any;

  private usersService = inject(UserssService);

  ngOnInit(){

    //this.loadEmployees();
    
    this.loadUsuarios(this.currentPage-1);

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


  loadUsuarios(page: number) { 
    this.usersService
      .getPaginatedData(page)
      .subscribe((data: Page<any>) => {
        this.users = data.content;
        this.totalPages = data.totalPages;
        this.currentPage = data.number + 1;
      });
  }

  onPageChange(page: number) {
    this.loadUsuarios(page-1);
  }
}
