
import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrl: './lista-contactos.component.css'
})
export class ListaContactosComponent implements OnInit{

  contactos: Contacto[];
  constructor(private contactoServicio:ContactoService){}
  ngOnInit(): void{
    this.obtenerContactos();
  }
  //Este método hace que me suscriba a toda esa lista
  private obtenerContactos(){
    this.contactoServicio.obtenerListaDeContactos().subscribe(dato =>{
      this.contactos = dato;
    });
  }
}
