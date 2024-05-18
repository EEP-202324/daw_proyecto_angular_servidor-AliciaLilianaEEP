
import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrl: './lista-contactos.component.css'
})
export class ListaContactosComponent implements OnInit{

  contactos: Contacto[];
  constructor(private contactoServicio:ContactoService, private router: Router){}
  ngOnInit(): void{
    this.obtenerContactos();
  }
  actualizarContacto(id:number){
    this.router.navigate(['actualizar-contacto',id]);
  }

  eliminarContacto(id:number){
    this.contactoServicio.eliminarContacto(id).subscribe(dato => {
      console.log(dato);
      this.obtenerContactos();
    });
  }

  //Este método hace que me suscriba a toda esa lista
  private obtenerContactos(){
    this.contactoServicio.obtenerListaDeContactos().subscribe(dato => {
      this.contactos = dato;
    });
  }

  //Este método me ayuda para poder ver a detalle el contacto(con sus detalles)
  verDetallesDelContacto(id:number){
    this.router.navigate(['empleado-detalle',id]);
  }
}
