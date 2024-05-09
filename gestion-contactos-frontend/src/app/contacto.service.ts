import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from './contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  //Mi URL del Backend que me trae todos los contactos de mi BBDD
  private baseURL = "http://localhost:8080/api/v1/contactos";

  constructor(private httpClient : HttpClient) { }

  //Mi método que me sirve para obtener los contactos
  obtenerListaDeContactos():Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(`${this.baseURL}`);
  }
}
