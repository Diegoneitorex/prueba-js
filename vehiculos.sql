CREATE TABLE vehiculos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    categoria ENUM('Deportivos', 'Familiares', 'Eléctricos') NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    marca VARCHAR(50),
    motor TEXT,
    transmision TEXT,
    precio DECIMAL(10,2),
    imagen_url VARCHAR(255),
    descripcion TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE noticias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT,
    fecha_publicacion DATE,
    autor VARCHAR(100)
);

CREATE TABLE noticias_galeria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    noticia_id INT,
    imagen_url VARCHAR(255),
    descripcion_imagen TEXT,
    orden INT,
    FOREIGN KEY (noticia_id) REFERENCES noticias(id)
);

CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vehiculo_id INT,
    cliente_nombre VARCHAR(100),
    cliente_email VARCHAR(100),
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('pendiente', 'completado', 'cancelado'),
    FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(id)
);

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password_hash VARCHAR(255),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);