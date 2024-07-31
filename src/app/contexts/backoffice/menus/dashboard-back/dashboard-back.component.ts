import { Component, inject } from '@angular/core';
import { MainLoaderService } from 'src/app/core/services/mainLoader.service';

@Component({
  selector: 'app-dashboard-back',
  templateUrl: './dashboard-back.component.html',
  styleUrls: ['./dashboard-back.component.css']
})
export class DashboardBackComponent {

  private mLoaderService = inject(MainLoaderService);

  ngOnInit(): void {
    this.mLoaderService.setStatus('ocultar');

  }

}
