import { Component, Input } from '@angular/core';
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
  @Input() buttons: Button[] = []

print(){
  window.print()
}

}
