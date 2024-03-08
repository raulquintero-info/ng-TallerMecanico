import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// import { LoginService } from 'src/app/core/services/login/login.service';
// import { User } from 'src/app/core/services/login/User.interface';

@Component({
  selector: 'app-navfront',
  templateUrl: './navfront.component.html',
  styleUrls: ['./navfront.component.css']
})
export class NavfrontComponent implements OnInit {

  titleBar: String = "Taller Mecánico"
  ngOnInit() {


  }


}
