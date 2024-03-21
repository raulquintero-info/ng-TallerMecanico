import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/modules/auth/services/login.service';

@Component({
  selector: 'app-mi-garage',
  templateUrl: './mi-garage.component.html',
  styleUrls: ['./mi-garage.component.css']
})
export class MiGarageComponent implements OnInit {

  constructor(private loginService: LoginService){}


  ngOnInit(){
  }

}
