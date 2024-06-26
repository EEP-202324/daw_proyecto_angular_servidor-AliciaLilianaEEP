package com.gestion.contactos.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.contactos.excepciones.ResourceNotFoundException;
import com.gestion.contactos.modelo.Contacto;
import com.gestion.contactos.repositorio.ContactoRepositorio;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactoControlador {

	@Autowired
	private ContactoRepositorio repositorio;

	// Este método sirve para listar todos los contactos
	@GetMapping("/contactos")
	public List<Contacto> listarTodosLosContactos() {
		return repositorio.findAll();
	}

	// Este método me sirve para buscar un contacto por ID, sino me lo encuentra,
	// lanzará mi excepción
	@GetMapping("/contactos/{id}")
	public ResponseEntity<Contacto> obtenerContactoPorId(@PathVariable Long id) {
		Contacto contacto = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el " + "contacto con el ID: " + id));
		return ResponseEntity.ok(contacto);
	}

	// Este método me sirve para guardar el contacto
	@PostMapping("/contactos")
	public Contacto guardarContacto(@RequestBody Contacto contacto) {
		return repositorio.save(contacto);
	}

	// Este método me sirve para actualizar un contacto
	@PutMapping("/contactos/{id}")
	public ResponseEntity<Contacto> actualizarContacto(@PathVariable Long id, @RequestBody Contacto detallesContacto) {
		Contacto contacto = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el " + "contacto con el ID: " + id));
		contacto.setNombre(detallesContacto.getNombre());
		contacto.setApellido(detallesContacto.getApellido());
		contacto.setEmail(detallesContacto.getEmail());

		Contacto contactoActualizado = repositorio.save(contacto);
		return ResponseEntity.ok(contactoActualizado);
	}

	// Este método me sirve para eliminar a un contacto
	@DeleteMapping("/contactos/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarContacto(@PathVariable Long id) {
		Contacto contacto = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el contacto con el ID : " + id));

		repositorio.delete(contacto);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}
	
	//Este método me sirve para buscar a un contacto
	@GetMapping("/contactos/buscar")
	public List<Contacto> buscarContactosPorPalabraClave(@Param("palabraClave") String palabraClave) {
	    return repositorio.findByNombreContainingOrApellidoContainingOrEmailContaining(palabraClave, palabraClave, palabraClave);
	}


}
