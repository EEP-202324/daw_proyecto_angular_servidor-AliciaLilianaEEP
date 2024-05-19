import { HttpClient, HttpParams } from '@angular/common/http';
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
  //obtenerListaDeContactos():Observable<Contacto[]>{
    //return this.httpClient.get<Contacto[]>(`${this.baseURL}`);
  //}

  //Mi método que me sirve para registrar a un contacto
  registrarContacto(contacto:Contacto) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, contacto)
  }

  //Mi método que me sirve para actualizar a un contacto
  actualizarContacto(id:number, contacto:Contacto) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, contacto);
  }

  //Mi método que me sirve para obtener/buscar a un contacto
  obtenerContactoPorId(id:number) : Observable<Contacto>{
    return this.httpClient.get<Contacto>(`${this.baseURL}/${id}`);
  }

  //Mi método que me sirve para eliminar a un contacto
  eliminarContacto(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  obtenerListaDeContactos(page: number, pageSize: number): Observable<Contacto[]> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.httpClient.get<Contacto[]>(this.baseURL, { params });
  }
}
