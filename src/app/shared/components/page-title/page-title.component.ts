import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'src/app/core/interfaces/button.interface';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent {
  @Input() path: string ='';
  @Input() title: string='&nbsp';
  @Input() subTitle: string=' ';
  @Input() printerEnabled: boolean = true;
  @Input() pdfEnabled: boolean = true;
  @Input() pdfUrl: string = "";
  @Input() buttons: Button[] = []

private router = inject(Router);

onPrint(){
  window.print()
}

onPdf(){
  this.router.navigateByUrl('/pdf-viewer')
}

}
