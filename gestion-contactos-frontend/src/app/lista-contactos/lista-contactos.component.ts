
import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit{

  contactos: Contacto[];
  palabraClave: string;
  constructor(private contactoServicio:ContactoService, private router: Router, private http: HttpClient){}
  ngOnInit(): void{
    this.obtenerContactos();
  }
  actualizarContacto(id:number){
    this.router.navigate(['actualizar-contacto',id]);
  }
  eliminarContacto(id:number){
    swal.fire({
      title: '¿Estás seguro?',
      text: 'Confirma si deseas eliminar al contacto',
      icon: 'warning',  // Cambiado de 'type' a 'icon'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.contactoServicio.eliminarContacto(id).subscribe(dato => {
          console.log(dato);
          this.obtenerContactos();
          swal.fire(
            'Contacto eliminado',
            'El contacto ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  //Este método hace que me suscriba a toda esa lista
  private obtenerContactos(){
    this.contactoServicio.obtenerListaDeContactos().subscribe(dato => {
      this.contactos = dato;
    });
  }

  //Este método me ayuda para poder ver a detalle el contacto(con sus detalles)
  verDetallesDelContacto(id:number){
    this.router.navigate(['contacto-detalles',id]);
  }

  buscarContactos() {
    this.http.get<any[]>('http://localhost:8080/api/v1/contactos/buscar?palabraClave=' + this.palabraClave)
      .subscribe(data => {
        this.contactos = data;
      });
  }
}
