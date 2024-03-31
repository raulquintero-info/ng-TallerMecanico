import { Component, inject } from '@angular/core';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { LoginService } from 'src/app/core/modules/auth/services/login.service';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  userData: User = {} as User;
  currentCustomer: Customer = {} as Customer;
  role: string = '';

  private loginService = inject(LoginService);
  private customersService = inject(CustomersService);

  ngOnInit() {

    // para determinar que footer se va a mostrar (ROl)
    this.loginService.checkStatus();
    this.loginService.currentRole.subscribe({
      next: (userRole: string) => {
        this.role = userRole
      }
    })

    this.customersService.getCurrentCustomer();
    this.customersService.currentCustomer.subscribe({
      next: (currentCustomer: Customer) =>{
        this.currentCustomer = currentCustomer;
      }
    });

  }

  clearCustomer() {
    this.customersService.setCurrentCustomer({} as Customer);
  }


}
