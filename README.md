
# **Memoria Artística**

## **Descripción Técnica del Proyecto**

**"Memoria Artística"** es una aplicación web interactiva diseñada para asistir a personas con Alzheimer a través de actividades visuales y cognitivas. El proyecto emplea tecnologías modernas para garantizar una experiencia fluida, funcional y escalable. Está dirigido a desarrolladores interesados en comprender y colaborar en la evolución del sistema desde una perspectiva técnica.

---

## **Arquitectura del Proyecto**

El sistema se compone de los siguientes módulos principales:

1. **Frontend:**
   - Construido con **React** y optimizado mediante **Vite**.
   - Diseñado con **CSS** para asegurar una interfaz responsiva y transiciones fluidas.
   - Comunicación con el backend a través de **Axios** para consumir APIs REST.

2. **Backend:**
   - Implementado como una API RESTful utilizando **FastAPI**.
   - La base de datos está gestionada con **PostgreSQL**, lo que permite un manejo robusto de la información.

3. **Docker:**
   - Despliegue basado en contenedores configurados con **Docker Compose**.
   - Separación clara de entornos de desarrollo y producción.

---

## **Requerimientos Previos**

Para trabajar en este proyecto, es necesario contar con las siguientes herramientas instaladas:

- **Node.js** (versión 16 o superior)
- **Docker** y **Docker Compose**
- **NPM** (incluido con Node.js)
- **Git** para clonar el repositorio.

---

## **Cómo Configurar el Entorno**

### **1. Configuración del Backend y la Base de Datos**

Dentro del repositorio `API-COLOR-GAME`:

**Repositorio GitHub:** [https://github.com/JeffersonDaviid/api-color-game.git](https://github.com/JeffersonDaviid/api-color-game.git)

1. Modifica el archivo `docker-compose.dev.yml`, descomentando las líneas correspondientes a la configuración de puertos para PostgreSQL:

   ```yaml
   ports:
     - "5433:5432"
   ```

2. Inicia únicamente el servicio de la base de datos con el siguiente comando:

   ```bash
   docker-compose -f docker-compose.dev.yml up database-ma
   ```

3. Para desplegar toda la API junto con sus servicios asociados, ejecuta:

   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```

   Esto iniciará tanto el backend como la base de datos, permitiendo realizar pruebas y establecer conexiones con el frontend.

### **2. Configuración del Frontend**

Clona el repositorio correspondiente al frontend del proyecto:

```bash
git clone https://github.com/tu-repositorio/memoria-artistica.git
cd memoria-artistica
```

Instala las dependencias necesarias:

```bash
npm install
npm install axios
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Accede a la aplicación en [http://localhost:5173](http://localhost:5173) o el puerto asignado por Vite.

---

## **Validación de la Base de Datos**

Para comprobar la creación de usuarios, pacientes o cualquier otra entidad en la base de datos:

1. Accede al contenedor de la base de datos con el siguiente comando:

   ```bash
   docker exec -it database-ma psql -U postgres -d memoria_artistica
   ```

2. Realiza consultas SQL para inspeccionar las tablas y su contenido. Por ejemplo:

   ```sql
   SELECT * FROM nombre_de_la_tabla;
   ```

   Sustituye `nombre_de_la_tabla` por la tabla que deseas consultar (ejemplo: `patient`, `therapist`, `session`, o `transfer`).

---

## **Estructura del Proyecto**

### **Frontend**

```bash
/public
├── assets          # Recursos como imágenes y fondos.
│   ├── fondos      # Imágenes de fondo del juego.
│   ├── personaje-hombre-descanso.png
│   ├── personaje-mujer-comienzo.png
│   ├── personaje-mujer-ok.png
│   └── vite.svg
/src
├── components      # Componentes reutilizables como botones, formularios, etc.
├── context         # Manejo de estados globales mediante React Context.
├── hooks           # Hooks personalizados para lógica compartida.
├── pages           # Páginas principales como el tablero de colores.
├── services        # Lógica para la interacción con la API.
└── App.jsx         # Punto de entrada del frontend.
```

### **Backend**

```bash
/src
├── middlewares     # Middleware para gestionar solicitudes y respuestas.
├── models          # Modelos de datos que interactúan con la base de datos.
├── routes          # Rutas de la API.
├── services        # Lógica de negocio y operaciones específicas.
├── utils           # Funciones auxiliares y constantes.
├── database.py     # Configuración de conexión a la base de datos.
└── main.py         # Punto de entrada del servidor FastAPI.
```

### **Docker**

```bash
/docker-compose.dev.yml    # Configuración para el entorno de desarrollo.
```

---

## **Notas Adicionales**

- Al realizar cambios en la configuración de Docker o en el código del backend, es recomendable eliminar los contenedores existentes y recrearlos para evitar conflictos.
- Asegúrese de que los servicios del backend estén en ejecución; de lo contrario, el frontend mostrará mensajes de error indicando que no se pudo establecer conexión con el servidor.
