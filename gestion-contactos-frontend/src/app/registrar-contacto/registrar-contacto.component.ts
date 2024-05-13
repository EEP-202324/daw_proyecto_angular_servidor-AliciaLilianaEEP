import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-registrar-contacto',
  templateUrl: './registrar-contacto.component.html',
  styleUrl: './registrar-contacto.component.css'
})
export class RegistrarContactoComponent implements OnInit {
  contacto : Contacto = new Contacto();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.contacto);
  }

}
