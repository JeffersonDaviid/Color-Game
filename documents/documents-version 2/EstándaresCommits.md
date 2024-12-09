
# **Estándares de Commits para el Proyecto Color Game**

## **Objetivo**

Este documento establece las convenciones que deben seguir los miembros del equipo al realizar commits en el proyecto **Color Game**. Adopta la especificación de [Commits Convencionales](https://www.conventionalcommits.org/es/v1.0.0/), buscando mantener un historial de cambios claro, comprensible y fácilmente rastreable, facilitando la colaboración y la automatización en el desarrollo.

---

## **1. Formato de los Commits**

Cada commit debe estructurarse de la siguiente manera:

```
<tipo>(<alcance>): <mensaje>
<opcional> <cuerpo del mensaje>
<opcional> <pie de página>
```

### **1.1 Componentes del Commit**

- **tipo**: Indica el propósito del commit. Los tipos permitidos son:
  - **feat**: Incorporación de nuevas funcionalidades.
  - **fix**: Corrección de errores.
  - **docs**: Modificaciones en la documentación.
  - **style**: Cambios que no afectan la lógica del código, como ajustes de formato o estilo.
  - **comment**: Adición de comentarios en el código sin alterar su funcionalidad.
  - **refactor**: Reestructuración del código que no modifica su comportamiento externo.
  - **test**: Adición o modificación de pruebas.
  - **chore**: Tareas menores que no afectan la lógica ni las pruebas, como actualizaciones de dependencias.
  - **perf**: Mejoras en el rendimiento de la aplicación.
- **alcance** (opcional): Especifica el módulo o componente afectado por el commit, proporcionando contexto adicional.
- **mensaje**: Descripción breve y concisa del cambio realizado.
- **cuerpo** (opcional): Explicación detallada del commit, incluyendo el motivo del cambio y su impacto en el proyecto.
- **pie de página** (opcional): Información adicional, como referencias a issues, tareas o enlaces relevantes.

---

## **2. Tipos de Commits Permitidos**

### **2.1 Commits para Nuevas Funcionalidades**

Utilizar el tipo `feat` para la adición de nuevas características:

```
feat(nivel-dificultad): añadir selector de nivel de dificultad
```

### **2.2 Commits para Corrección de Errores**

Utilizar el tipo `fix` para solucionar errores:

```
fix(api): corregir error en la obtención de colores
```

### **2.3 Commits para Refactorización de Código**

Utilizar el tipo `refactor` para reestructuraciones que no alteran la funcionalidad:

```
refactor(logica-juego): optimizar algoritmo de generación de colores
```

### **2.4 Commits para Cambios en la Documentación**

Utilizar el tipo `docs` para modificaciones en la documentación:

```
docs: actualizar guía de instalación
```

### **2.5 Commits para Cambios en el Estilo del Código**

Utilizar el tipo `style` para ajustes de formato o estilo que no afectan la lógica:

```
style(ui): mejorar indentación en componentes de interfaz
```

### **2.6 Commits para Documentación del Código**

Utilizar el tipo `comment` para añadir comentarios en el código sin modificar su lógica:

```
comment(GameEngine): añadir comentarios explicativos a los métodos principales
```

### **2.7 Commits para Mejoras de Rendimiento**

Utilizar el tipo `perf` para optimizaciones de rendimiento:

```
perf(renderizado): mejorar eficiencia en la actualización de la interfaz
```

### **2.8 Commits para Añadir o Modificar Pruebas**

Utilizar el tipo `test` para la incorporación o ajuste de pruebas:

```
test(juego): añadir pruebas unitarias para la lógica de puntuación
```

### **2.9 Commits para Tareas Generales**

Utilizar el tipo `chore` para tareas menores que no afectan la lógica ni las pruebas:

```
chore: actualizar dependencias del proyecto
```

---

## **3. Reglas para los Mensajes de Commit**

- El mensaje del commit debe comenzar con letra minúscula, salvo que incluya nombres propios, archivos o clases que requieran mayúsculas.
- El mensaje debe ser claro y explicar el cambio de manera que otros miembros del equipo lo comprendan rápidamente.
- La línea principal del mensaje no debe exceder los 100 caracteres.

