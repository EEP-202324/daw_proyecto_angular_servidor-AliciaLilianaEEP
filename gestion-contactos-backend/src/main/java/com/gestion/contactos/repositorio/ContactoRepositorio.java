package com.gestion.contactos.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.contactos.modelo.Contacto;

@Repository
public interface ContactoRepositorio extends JpaRepository<Contacto, Long>{
	List<Contacto> findByNombreContainingOrApellidoContainingOrEmailContaining(String nombre, String apellido, String email);
}
