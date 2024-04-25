import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturas-view',
  templateUrl: './facturas-view.component.html',
  styleUrls: ['./facturas-view.component.css']
})
export class FacturasViewComponent implements OnInit {
  title: string = "Autopro";
  subTitle: string = "Notas de Venta";
  buttons = [];

  ngOnInit(): void {

    setTimeout(()=>{
      window.print();
    }, 1000);
  }

}
