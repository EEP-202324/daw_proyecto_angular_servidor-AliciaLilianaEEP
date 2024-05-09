
import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrl: './lista-contactos.component.css'
})
export class ListaContactosComponent implements OnInit{

  contactos: Contacto[];
  constructor(){}
  ngOnInit(): void{
    this.contactos = [{
      "id":1,
      "nombre":"Damien",
      "apellido":"Romero",
      "email" : "romerodamien@gmail.com"
    },
    {
      "id":2,
      "nombre":"Juliette",
      "apellido":"Gonzalez",
      "email" : "juliette20@gmail.com"
    }
  ];
  }

}
