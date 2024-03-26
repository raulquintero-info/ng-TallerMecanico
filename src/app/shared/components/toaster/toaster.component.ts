import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent {
  @Input() title: string ='';
  @Input() timeAgo: string ='';
  @Input() body: string ='';

}
