import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { TutorialsService } from '../services/tutorials.service';


@Component({
  selector: 'app-cronologia-content',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, HttpClientModule,CommonModule,MatButtonModule, MatDialogModule],
  templateUrl: './cronologia-content.component.html',
  styleUrl: './cronologia-content.component.css'
})
export class CronologiaContentComponent {

  partita_array:any[] = []
  mosse_array:any[] = []
  giocatori :any[] = []
  punteggio_p1 = 0
  punteggio_p2 = 0
  
  constructor(private tutorialsService: TutorialsService) {}

  ngOnInit() {  
    // DA fare
    this.tutorialsService.getPartita().subscribe(response=>{
      this.partita_array = response
      console.log(this.partita_array[0].giocatore1.nome)
    })

    this.tutorialsService.getGiocatori().subscribe(response=>{
      this.giocatori = response
    })
    
    
  }
  getResult(winner:any,p1:any,p2:any){

    this.punteggio_p1 = 0
    this.punteggio_p2 = 0
    if(winner != null){
      if(winner.nome === p1.nome) this.punteggio_p1++
      else if(winner.nome === p2.nome) this.punteggio_p2++
    }
    

    return this.punteggio_p1+" : "+this.punteggio_p2

  }
  render(partita:any){
    this.tutorialsService.getMosse(partita).subscribe(response=>{
      console.log(response)
    })
  }

  selectPlayer(player:any){
    this.tutorialsService.getPartita_by_giocatore(player).subscribe(response=>{
      this.partita_array = response
    })
  } 
}
