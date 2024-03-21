import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  arreglo = {"numero":1,"cadena":"sfsdfsdf"};
  constructor(){}

  ngOnInit(){

  }
}
