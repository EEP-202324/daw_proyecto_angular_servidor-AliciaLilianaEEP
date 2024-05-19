import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ActivatedRoute } from '@angular/router';
import { ContactoService } from '../contacto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contacto-detalles',
  templateUrl: './contacto-detalles.component.html',
  styleUrls: ['./contacto-detalles.component.css']
})
export class ContactoDetallesComponent implements OnInit{

  id:number;
  contacto:Contacto;
  constructor(private route:ActivatedRoute, private contactoServicio:ContactoService){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.contacto = new Contacto();
    this.contactoServicio.obtenerContactoPorId(this.id).subscribe(dato => {
      this.contacto = dato;
      swal.fire(`Detalles del contacto ${this.contacto.nombre}`);
    })
  }

}
