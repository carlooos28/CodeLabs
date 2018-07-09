CREATE DATABASE mvp_prototipo;

// DROP DATABASE mvp_prototipo;

// ALTER DATABASE mvp_prototipo RENAME TO curso_pg;

// conectar bd
\c curso_pg;

// CRUD-CREATE

CREATE TABLE rol (
id INT,
nombre VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE usuarios (
id INT,
cedula INT,
nombre VARCHAR(30),
apellido VARCHAR(30),
cargo VARCHAR(30),
tiempo_servicio INT,
rol_id INT,
PRIMARY KEY (id), 
FOREIGN KEY (rol_id) REFERENCES rol(id)
);


INSERT INTO rol (id, nombre) VALUES
(1, 'Admin'),
(2, 'Estadistica'),
(3, 'ventas');

INSERT INTO usuarios (id, cedula, nombre, apellido, cargo, tiempo_servicio, rol_id) VALUES
(1, 12345632,'Leo','Perez','Sistemas',14, 1),
(2, 12345632,'Maria','Ortiz','Sistemas',14, 2),
(3, 9345728,'Juana','Cabrera','Sistemas',8, 1);

SELECT nombre, apellido FROM usuarios; 

UPDATE usuarios SET tiempo_servicio=4 WHERE nombre='Juana';

DELETE FROM usuarios WHERE nombre='Leo';

TRUNCATE TABLE usuarios;

SELECT
	*
FROM
 usuarios
INNER JOIN rol ON rol.id = usuarios.rol_id;