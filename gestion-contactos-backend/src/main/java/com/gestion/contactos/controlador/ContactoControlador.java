package com.gestion.contactos.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.contactos.modelo.Contacto;
import com.gestion.contactos.repositorio.ContactoRepositorio;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactoControlador {

	@Autowired
	private ContactoRepositorio repositorio;

	//Este método sirve para listar todos los contactos
	@GetMapping("/contactos")
	public List<Contacto> listarTodosLosContactos() {
		return repositorio.findAll();
	}
	
	//Este método me sirve para guardar el contacto
	@PostMapping("/contactos")
	public Contacto guardarContacto(@RequestBody Contacto contacto) {
		return repositorio.save(contacto);
		
	}

}
