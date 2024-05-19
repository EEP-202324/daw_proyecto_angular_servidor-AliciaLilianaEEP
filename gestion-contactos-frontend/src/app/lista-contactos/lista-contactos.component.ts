
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
  constructor(private contactoServicio:ContactoService, private router: Router){}
  ngOnInit(): void{
    this.obtenerContactos();
  }
  actualizarContacto(id:number){
    this.router.navigate(['actualizar-contacto',id]);
  }
  eliminarContacto(id:number){
    swal.fire({
      title: '¿Estás seguro?',
      text: 'Confirma si deseas eliminar al empleado',
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
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
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
    this.router.navigate(['empleado-detalles',id]);
  }
}
