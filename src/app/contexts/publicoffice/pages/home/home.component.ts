import { Component, OnInit, Renderer2, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  arreglo = {"numero":1,"cadena":"sfsdfsdf"};
  constructor(){}

  private renderer= inject(Renderer2)

  ngOnInit(){
    this.renderer.removeClass(document.body, 'bg');

  }
}
