# **Flujo de Trabajo con Git - Proyecto Color Game**

## **Objetivo**

Este documento establece un flujo de trabajo con Git para el desarrollo colaborativo del proyecto **Color Game**. Mediante una estructura clara de ramas y roles definidos, se busca facilitar la integración de nuevas funcionalidades y la resolución de errores, asegurando la calidad y estabilidad del código en producción.

---

## **1. Estructura de Ramas**

### **1.1 Ramas Principales**

- **main**: Contiene el código listo para producción. Solo se fusionan cambios que han sido completamente probados y aprobados.

- **develop**: Rama de integración donde se combinan las funcionalidades en desarrollo. Los desarrolladores fusionan aquí sus cambios después de pruebas y validaciones en sus ramas de funcionalidad.
- **release**: Esta rama se utiliza para preparar una nueva versión del producto para producción. Se crea a partir de develop cuando se está listo para hacer un lanzamiento y se utiliza para realizar pruebas finales y correcciones menores antes de fusionarse con main. Las ramas release permiten estabilizar el código y corregir errores detectados sin agregar nuevas funcionalidades.

### **1.2 Ramas de Funcionalidades**

Se crean a partir de la rama `develop` para el desarrollo de nuevas características.

- **Formato de nombre**: `feature/nombre-de-la-funcionalidad`

- **Ejemplos**:
  - `feature/implementacion-nivel-dificultad`
  - `feature/mejora-interfaz-usuario`

### **1.3 Ramas de Corrección de Errores**

Se crean a partir de `develop` o `main`, según dónde se haya detectado el error. Se utilizan para corregir problemas específicos y, una vez solucionados, se fusionan de nuevo en la rama correspondiente.

- **Formato de nombre**: `bugfix/nombre-del-error`

- **Ejemplos**:
  - `bugfix/correccion-error-navegacion`
  - `bugfix/ajuste-responsividad`

### **1.4 Ramas de Hotfix**

Se crean a partir de `main` para corregir problemas críticos en producción. Una vez solucionado, se fusionan de nuevo en `main` y `develop` para mantener la coherencia del código.

- **Formato de nombre**: `hotfix/nombre-del-error`

- **Ejemplo**:
  - `hotfix/solucion-error-critico`

---

## **2. Roles en el Equipo**

### **2.1 Desarrolladores de Frontend**

**Responsabilidades:**

- Desarrollar y mejorar la interfaz de usuario utilizando **React** y **CSS**.
- Asegurar la comunicación efectiva con el backend mediante **Axios**.

**Flujo de trabajo:**

- Crear ramas de funcionalidad a partir de `develop`.
- Realizar commits siguiendo las convenciones del proyecto.
- Al completar una funcionalidad, generar un Pull Request hacia `develop` para revisión.

### **2.2 Desarrolladores de Backend**

**Responsabilidades:**

- Implementar y mantener la API RESTful con **FastAPI**.
- Gestionar la base de datos **PostgreSQL** y asegurar su integración con el frontend.

**Flujo de trabajo:**

- Trabajar en ramas de funcionalidad creadas a partir de `develop`.
- Realizar commits según las normas establecidas.
- Al finalizar una funcionalidad, crear un Pull Request hacia `develop` para su revisión.

---

## **3. Proceso de Integración y Revisión de Código**

### **3.1 Creación de Pull Requests (PR)**

- Al completar una tarea en una rama de funcionalidad o corrección de errores, el desarrollador debe crear un PR desde su rama hacia `develop`.
- El PR debe incluir una descripción clara de los cambios realizados y cualquier información relevante para la revisión.

### **3.2 Revisión y Aprobación de Pull Requests**

- Un miembro del equipo revisará el PR, asegurando que los cambios no afecten negativamente al proyecto y que cumplan con los estándares establecidos.
- Se proporcionarán comentarios y sugerencias si es necesario.
- El PR se fusionará a `develop` solo después de recibir la aprobación correspondiente.

---

## **4. Gestión de Versiones**

Cuando las funcionalidades y correcciones en `develop` están listas para una nueva versión:

### **4.1 Creación de la Rama release**

- Crear una rama `release/x.x.x` a partir de `develop`, donde `x.x.x` representa la nueva versión.
- Realizar pruebas finales y corregir errores menores en esta rama.

### **4.2 Fusión de la Rama release**

- Una vez estabilizada, fusionar la rama `release` en `main`.
- Actualizar la documentación y otros recursos necesarios.
- Fusionar `release` de nuevo en `develop` para que los cambios estén disponibles en futuros desarrollos.

---

