import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrisComponent   } from './tris/tris.component';
import { CronologiaContentComponent } from './cronologia-content/cronologia-content.component';
import { CronologiaComponent } from './cronologia/cronologia.component';
import { TutorialsService } from './services/tutorials.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, JsonPipe, HttpClientModule, TrisComponent, CronologiaContentComponent,CronologiaComponent]
})
export class AppComponent {
  title = 'fe-angular';

  tutorials: any;

  constructor(private tutorialsService: TutorialsService) {}

  ngOnInit() {
    //da fare
  }

}
