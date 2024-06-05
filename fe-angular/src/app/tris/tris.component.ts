import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

import { TutorialsService } from '../services/tutorials.service';
import {CronologiaComponent} from "../cronologia/cronologia.component"

@Component({
  selector: 'app-tris',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, HttpClientModule,CommonModule,FormsModule,CronologiaComponent],
  templateUrl: './tris.component.html',
  styleUrl: './tris.component.css'
})
export class TrisComponent {

  msg_login = "";
  player1="";
  player2="";
  login_success = false;
  partita:any;

  response: any;

  btn_reset = false;

  vincitori:string[] = []
  esito_partita = "" // punteggio p1 : punteggio p2
  punteggio_p1 : number = 0
  punteggio_p2 : number = 0
  
  array: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  segno = ["X","O"]
  players : string[]= [];

  segnoValue = 0

  constructor(private tutorialsService: TutorialsService) {}

  return_body(posX:number,posY:number,segno:string,player:string,partita:any){
    return {
      'posizioneX':posX,
      'posizioneY':posY,
      'segno':segno,
      'nomeGiocatore':player,
      'partita' :partita
    }
  }

  ngOnInit() {  
    // DA fare

  }
  click(posX: number, posY: number) {
    // if (this.isDisabled(posX, posY)) {
    //   return;
    // }

    this.tutorialsService.sendPos(this.return_body(posX, posY, this.segno[this.segnoValue], this.players[this.segnoValue],this.partita)).subscribe((data: any) => {
      this.response = data.msg;
      if (data.msg) {
        //alert(data.msg);
        if (data.msg.includes('vincitore') || data.msg.includes('pareggio')) {
          this.btn_reset = true;
          this.disableAllButtons();
          if(data.msg.includes('vincitore')) 
            this.vincitori.push(this.response)
          console.log(this.response)

          this.get_esito_partita()
        }
        
      }
    });

    this.array[posX][posY] = this.segno[this.segnoValue];
    this.setSegno();
  }
  setSegno() {
    this.segnoValue = this.segnoValue === 0 ? 1 : 0;
  }
  isDisabled(posX: number, posY: number) {
    return this.array[posX][posY] !== '';
  }

  reset_all() {
    this.array = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.segnoValue = 0;

    this.btn_reset = false;

    this.login_success = false;

    this.response = ""

    this.vincitori = []

    this.punteggio_p1 = 0
    this.punteggio_p2 = 0 

    this.msg_login = ""
  }
  reset() {
    this.array = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.segnoValue = 0;

    this.btn_reset = false;

    this.response = ""

  }

  disableAllButtons() {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.board button');
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const p1 = form.value.player1.trim();
      const p2 = form.value.player2.trim();

      if( p1 === p2 )this.msg_login = "Errore: nomi dei giocatori non adatti"

      else{
        this.setPlayer(form.value.player1,form.value.player2)
        this.set_login_success(true)
        this.tutorialsService.start(this.player1,this.player2).subscribe(response=>{
          this.partita = response
        });
        this.players.push(this.player1)
        this.players.push(this.player2)
      }
      
    }else //campo nome vuoti
      this.msg_login = "Errore: inserisci nomi validi";
    
  }

  setPlayer(ply1:string,ply2:string){
    this.player1 = ply1
    this.player2 = ply2
  }

  set_login_success(value:boolean){
      this.login_success = value
  }

  get_esito_partita(){
    this.punteggio_p1 = 0
    this.punteggio_p2 = 0

    this.vincitori.forEach((item)=>item===("vincitore: "+this.player1+";") ? this.punteggio_p1++ :  item===("vincitore: "+this.player2+";") ? this.punteggio_p2++ : "")
  }


}
