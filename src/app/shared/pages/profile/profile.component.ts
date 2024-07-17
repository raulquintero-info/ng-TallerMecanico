import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Employee } from 'src/app/core/interfaces/employee.interface';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { LoginService } from 'src/app/core/modules/auth/services/login.service';
import { CustomersService } from 'src/app/core/services/customers.service';
import { EmployeesService } from 'src/app/core/services/employees.service';
import { ToastService } from 'src/app/core/modules/toast/services/toast.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'shared-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showSpinner: boolean = false;
  showPassword: boolean = false;
  showPasswordForm: boolean = false;
  title: string = "";
  subTitle: string = "Mi Perfil";
  buttons = [/* { text: "Agregar", path: "/admin/profile/..." } */];
  user: User = {} as User;
  employee: Employee = {} as Employee;
  customer: Customer = {} as Customer;

  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);
  private employeesService = inject(EmployeesService);
  private customersService = inject(CustomersService);
  private toastService = inject(ToastService);

  newPasswordForm = this.formBuilder.group({
    currentPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.minLength(4)]],
  });


  ngOnInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser() {
    this.loginService.currentUser().subscribe({
      next: (user: User) => {
        this.user = user;
        if (user.idEmpleado > 0) this.getEmployeeInfo(user.idEmpleado);
        else this.getCustomerInfo(user.idCliente);
      }
    });
  }

  getEmployeeInfo(id: number) {
    this.employeesService.getById(id).subscribe({
      next: (employee: Employee) => { this.employee = employee; }
    })
  }
  getCustomerInfo(id: number) {
    this.customersService.getById(id).subscribe({
      next: (customer: Customer) => { this.customer = customer; }
    })
  }

  onPasswordFormBtn() {
    this.showPasswordForm = true;
    console.log('show', this.showPasswordForm);

  }

  onSaveBtn() {
    this.showSpinner = true;
    // Verificar si el formulario es válido
    if (this.newPasswordForm.invalid) {
      // Marcar los controles del formulario como tocados para mostrar los mensajes de error
      this.newPasswordForm.markAllAsTouched();
      this.showSpinner = false; // Detener el spinner
      return; // Detener el proceso de guardado
    }

      this.loginService.setNewPassword( this.newPasswordForm.value).subscribe({
        next: resp=>{
          console.log(resp)
          this.showSpinner = false
          this.newPasswordForm.patchValue({
            currentPassword: "",
            newPassword: "",
          });
          this.newPasswordForm.reset();
          this.showPasswordForm = false;

          Swal.fire({
            title: 'Seguridad del Sistema',
            text: 'Se ha cambiado la contraseña.',
            confirmButtonColor: '#1a4f46',
            confirmButtonText: 'Cerrar'
          });

        },
        error: resp=>{
          console.log(resp);
          this.showSpinner = false
          this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: resp.error.mensaje, type: 'danger' })

        }

      })

  }


  setShowPassword(show: boolean){
    this.showPassword = show;
  }

  onCancelBtn() {
    console.log('show', this.showPasswordForm);
    this.newPasswordForm.reset();
    this.showPasswordForm = false;
  }


}
