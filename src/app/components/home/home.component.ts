import { Component, OnInit } from '@angular/core';
import {Heroe} from "../../Models/Heroe";
import {Heroe2} from "../../Models/Heroe2.";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  arregloHeroe: Heroe [] = [
    {
      nombre: "Anthony Edward Stark",
      alias: "Iron Man",
      especie: "Human",
      nacionalidad: "American",
      fechaNacimiento: "May 29, 1970",
      frase: "My armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. But one thing you can't take away... I am Iron Man",
      foto: "assets/IronMan.webp"
    },
    {
      nombre: "Steven Grant Rogers",
      alias: "Captain America",
      especie: "Human",
      nacionalidad: "American",
      fechaNacimiento: "July 4, 1918",
      frase: "For as long as I can remember, I just wanted to do what was right. I guess I'm not quite sure what that is anymore. And I thought I could throw myself back in and follow orders, serve. It's just not the same.",
      foto: "assets/CapAmerica.webp"
    },
    {
      nombre: "Thor Odinson",
      alias: "Thor",
      especie: "Asgardian",
      nacionalidad: "Asgardian",
      fechaNacimiento: "964 A.D.–965 A.D.",
      frase: "It's time for me to be who I am, rather than who I'm supposed to be.",
      foto: "assets/Thor.webp"
    },
    {
      nombre: "loki Laufeyson",
      alias: "Loki",
      especie: "Frost Giant",
      nacionalidad: "Asgardian Jotun",
      fechaNacimiento: "965 A.D.",
      frase: "I, Loki, Prince of Asgard, Odinson, the rightful King of Jotunheim, God of Mischief, do hereby pledge to you, my undying fidelity.",
      foto: "assets/Loki.webp"
    },
    {
      nombre: "Scott Edward Harris Lang",
      alias: "Ant Man",
      especie: "Human",
      nacionalidad: "American",
      fechaNacimiento: "NA",
      frase: "I do some dumb things and the people that I love the most pay the price. Mainly you.",
      foto: "assets/AntMan.webp"
    },
    {
      nombre: "Peter Benjamin Parker",
      alias: "Spider Man",
      especie: "Human",
      nacionalidad: "American",
      fechaNacimiento: "August 10, 2001",
      frase: "Truth is... that this is all my fault. I accidentally brought those dangerous people here. And if those people are watching... just know that I really did try to help you. I mean, I could've killed you. At any given moment, but I didn't. Because my Aunt May taught me that everyone deserves a second chance.",
      foto: "assets/SpiderMan.webp"
    },
    {
      nombre: "Stephen Vincent Strange",
      alias: "Doctor Strange",
      especie: "Human",
      nacionalidad: "American",
      fechaNacimiento: "NA",
      frase: "What is your job exactly, besides making balloon animals? Protecting your reality, douchebag.",
      foto: "assets/DoctorStrange.webp"
    },
    {
      nombre: "Carol Susan Jane Danvers",
      alias: "Captain Marvel",
      especie: "Human/Kree Hybrid",
      nacionalidad: "American Kree Imperial",
      fechaNacimiento: "Mid-1960s",
      frase: "I'm coming to end it. The war, the lies, all of it.",
      foto: "assets/CapMarvel.webp"
    },
    {
      nombre: "T'Challa",
      alias: "Black Panther",
      especie: "Human",
      nacionalidad: "Wakandan",
      fechaNacimiento: "NA",
      frase: "My name is King T'Challa, son of King T'Chaka. I am the sovereign ruler of the nation of Wakanda. And for the first time in our history, we will be sharing our knowledge and resources with the outside world.",
      foto: "assets/BlackPanther.webp"
    },
    {
      nombre: "Natalia Alianovna Romanoff",
      alias: "Black Widow",
      especie: "Human",
      nacionalidad: "Russian",
      fechaNacimiento: "December 3, 1984",
      frase: "I used to have nothing. And then I got this. This job. This family. And I was better because of it. And even though they're gone... I'm still trying to be better.",
      foto: "assets/BlackWidow.webp"
    }
  ];

  contadorMegusta0: number = 1;
  contadorMegusta1: number = 1;
  contadorMegusta2: number = 1;
  contadorMegusta3: number = 1;
  contadorMegusta4: number = 1;
  contadorMegusta5: number = 1;
  contadorMegusta6: number = 1;
  contadorMegusta7: number = 1;
  contadorMegusta8: number = 1;
  contadorMegusta9: number = 1;
  contadorMegusta10: number = 1;

  contadorNoMegusta0: number = 1;
  contadorNoMegusta1: number = 1;
  contadorNoMegusta2: number = 1;
  contadorNoMegusta3: number = 1;
  contadorNoMegusta4: number = 1;
  contadorNoMegusta5: number = 1;
  contadorNoMegusta6: number = 1;
  contadorNoMegusta7: number = 1;
  contadorNoMegusta8: number = 1;
  contadorNoMegusta9: number = 1;
  contadorNoMegusta10: number = 1;

  mayor: number = 0;
  menor: number =0;
  posicion: number =0;


  heroeMax: Heroe2 = new Heroe2("","","","","","","");
  heroeMin: Heroe2 = new Heroe2("","","","","","","");

  mostrar : boolean = false;
  mostrar2 : boolean = false;

  contadorMeGusta: number[] = [];
  contadorNoMeGusta: number[] =[];

  incrementarMeGusta(idx: number) {

    if (idx ==0) {
      this.contadorMeGusta[0] = this.contadorMegusta0++ ;
    }
    if (idx ==1){
      this.contadorMeGusta[1] = this.contadorMegusta1++ ;
    }
    if (idx ==2){
      this.contadorMeGusta[2] = this.contadorMegusta2++ ;
    }
    if (idx ==3){
      this.contadorMeGusta[3] = this.contadorMegusta3++ ;
    }
    if (idx ==4){
      this.contadorMeGusta[4] = this.contadorMegusta4++ ;
    }
    if (idx ==5){
      this.contadorMeGusta[5] = this.contadorMegusta5++ ;
    }
    if (idx ==6){
      this.contadorMeGusta[6] = this.contadorMegusta6++ ;
    }
    if (idx ==7){
      this.contadorMeGusta[7] = this.contadorMegusta7++ ;
    }
    if (idx ==8){
      this.contadorMeGusta[8] = this.contadorMegusta8++ ;
    }
    if (idx ==9){
      this.contadorMeGusta[9] = this.contadorMegusta9++ ;
    }
    if (idx ==10){
      this.contadorMeGusta[10] = this.contadorMegusta10++ ;
    }

  }

  incrementarNoMeGusta(idx: number) {
    if (idx ==0) {
      this.contadorNoMeGusta[0] = this.contadorNoMegusta0++ ;
    }
    if (idx ==1){
      this.contadorNoMeGusta[1] = this.contadorNoMegusta1++ ;
    }
    if (idx ==2){
      this.contadorNoMeGusta[2] = this.contadorNoMegusta2++ ;
    }
    if (idx ==3){
      this.contadorNoMeGusta[3] = this.contadorNoMegusta3++ ;
    }
    if (idx ==4){
      this.contadorNoMeGusta[4] = this.contadorNoMegusta4++ ;
    }
    if (idx ==5){
      this.contadorNoMeGusta[5] = this.contadorNoMegusta5++ ;
    }
    if (idx ==6){
      this.contadorNoMeGusta[6] = this.contadorNoMegusta6++ ;
    }
    if (idx ==7){
      this.contadorNoMeGusta[7] = this.contadorNoMegusta7++ ;
    }
    if (idx ==8){
      this.contadorNoMeGusta[8] = this.contadorNoMegusta8++ ;
    }
    if (idx ==9){
      this.contadorNoMeGusta[9] = this.contadorNoMegusta9++ ;
    }
    if (idx ==10){
      this.contadorNoMeGusta[10] = this.contadorNoMegusta10++ ;
    }
  }

  getMayor(){

    for(let i = 0; i < this.contadorMeGusta.length; i++){

      if (this.contadorMeGusta[i] > this.mayor)
      {
        this.mayor = this.contadorMeGusta[i];
        this.posicion = i;
      }

    }

    this.heroeMax = this.arregloHeroe[this.posicion];

    this.mostrar= true;
    //return this.heroeMax;
  }

  getMenor(){

    for(let i = 0; i < this.contadorNoMeGusta.length; i++){

      if (this.contadorNoMeGusta[i] > this.menor)
      {
        this.menor = this.contadorNoMeGusta[i];
        this.posicion = i;
      }

    }

    this.heroeMin = this.arregloHeroe[this.posicion];

    this.mostrar2= true;

  }

  sub(){

  }

  constructor() {
    let numbers: number[] = [1, 2, 3, 4, 5];
  }

  ngOnInit(): void {
    let numbers: number[] = [1, 2, 3, 4, 5];

  }

}
