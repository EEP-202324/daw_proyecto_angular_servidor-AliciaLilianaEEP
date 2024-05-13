import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-registrar-contacto',
  templateUrl: './registrar-contacto.component.html',
  styleUrl: './registrar-contacto.component.css'
})
export class RegistrarContactoComponent implements OnInit {
  contacto : Contacto = new Contacto();
  constructor(private contactoServicio:ContactoService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarContacto(){
    this.contactoServicio.registrarContacto(this.contacto).subscribe(dato => {
      console.log(dato);
      this.irAListaDeContactos();
    }, error => console.log(this.contacto));
  }

  irAListaDeContactos(){
    this.router.navigate(['/contactos']);
  }

  onSubmit(){
    this.guardarContacto();
  }

}
