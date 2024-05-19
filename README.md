# PROYECTO AULA: GESTIÓN DE CONTACTOS

## Descripción
El proyecto AULA GESTIÓN DE CONTACTOS es una aplicación web diseñada para facilitar la capturación y almacenamiento de información de los participantes del evento AULA intersados en el centro EEP iGROUP. 
Esta aplicación permite a los voluntarios, maestros, u organizadores del Stand del centro, registrar los datos de los asistentes de manera rápida y eficiente, ayudando así a mantener un registro organizado y accesible para futuras referencias.

## Funcionalidades principales
- **Registro de asistentes:** La aplicación permite ingresar el nombre, apellido y correo electrónico de los asistentes al evento AULA, asignándoles un ID automático.
- **Almacenamiento en base de datos:** Los datos registrados se guardan de forma segura en una base de datos para su posterior consulta y análisis.
- **Interfaz intuitiva:** La interfaz ha sido diseñada para ser amigable y fácil de usar, permitiendo al usuario registrar la información de manera eficiente.
- **Aplicación de mínimo dos pantallas:** Capaz de listar todos los elementos y añadir nuevos

## Funcionalidades adicionales
Además de ser una aplicación Angular que hace peticiones REST a un servidor Spring que se conecta a una base de datos, para manejar datos de alguna entidad relacionada con la feria Aula, se encuentran las siguientes funcionalidades:
- **Consulta:** En el FrontEnd tengo una pantalla de consulta de los datos de un contacto, en el Backend tengo un verbo GET para recuperar un contacto de la BBDD por id
- **Modificación:** Formulario de modificación de los contactos y verbo PUT para actualizar un contacto en la BBDD
- **Eliminación:** Botón de eliminación de un contacto y verbo DELETE para eliminar un contacto de la BBDD
- **Búsqueda:** Criterio de búsqueda de contacto y consultas de búsqueda con filtrado

## Tecnologías utilizadas
- **Frontend:** Angular
- **Backend:** Spring Framework
- **Base de datos:** MySQL

## Instalación y configuración
Para el correcto uso de esta aplicación es necesario:
1. Clonar este repositorio en tu local
2. Asegurarse de tener instalado Node.js y npm (para el frontend), y Java y Maven para el backend.
3. Configurar la conexión a la base de datos en el archivo de configuración correspondiente.
4. Ejecutar el backend utilizando Maven: `mvn spring-boot:run`.
5. Iniciar el frontend ejecutando `npm install` seguido de `ng serve`.

## Enlace al vídeo exlicativo de la app:

## Contacto
- Alicia Pérez
- alicialilianaperez14@gmail.com
- +34 639 682 939
