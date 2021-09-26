import { Component } from '@angular/core';
import { Historic } from './models/historic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator-FADA';
  public historics: Historic[] = []

  public recivedHistoric(event: any) {
    this.historics = event;
    console.log(event, 'Evento recibido');
  }

}
