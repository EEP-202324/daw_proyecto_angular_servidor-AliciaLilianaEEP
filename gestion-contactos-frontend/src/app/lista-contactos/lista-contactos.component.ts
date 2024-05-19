
import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit{

  contactos: Contacto[];
  currentPage: number = 1;
  pageSize: number = 10; // Tamaño de la página

  constructor(private contactoServicio:ContactoService, private router: Router){}
  ngOnInit(): void{
    this.obtenerContactos();
  }
  actualizarContacto(id:number){
    this.router.navigate(['actualizar-contacto',id]);
  }

  //Este método me sirve para eliminar el contacto solamente si al contestar la pregunta dicen "SI ELIMINAR"
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
  //private obtenerContactos(){
    //this.contactoServicio.obtenerListaDeContactos(this.currentPage, this.pageSize)
      //.subscribe(contactos => this.contactos = contactos);
   // };

  //Este método me ayuda para poder ver a detalle el contacto(con sus detalles)
  verDetallesDelContacto(id:number){
    this.router.navigate(['contacto-detalles',id]);
  }

  // Método para obtener los contactos de forma paginada
obtenerContactos() {
  this.contactoServicio.obtenerListaDeContactos(this.currentPage, this.pageSize)
    .subscribe(contactos => this.contactos = contactos);
}

// Método para cambiar de página
cambiarPagina(page: number) {
  this.currentPage = page;
  this.obtenerContactos();
}
  }
