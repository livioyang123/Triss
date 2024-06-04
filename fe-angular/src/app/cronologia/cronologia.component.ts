import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CronologiaContentComponent } from '../cronologia-content/cronologia-content.component'

@Component({
  selector: 'app-cronologia',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './cronologia.component.html',
  styleUrl: './cronologia.component.css'
})
export class CronologiaComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CronologiaContentComponent,{
      width: '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
