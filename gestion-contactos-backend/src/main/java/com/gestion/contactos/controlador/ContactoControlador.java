package com.gestion.contactos.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.contactos.modelo.Contacto;
import com.gestion.contactos.repositorio.ContactoRepositorio;

@RestController
@RequestMapping("/api/v1/")
public class ContactoControlador {

	@Autowired
	private ContactoRepositorio repositorio;

	@GetMapping("/contactos")
	public List<Contacto> listarTodosLosEmpleados() {
		return repositorio.findAll();
	}

}
