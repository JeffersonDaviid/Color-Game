# Color Game – Juego de Colorear Tangram para Personas con Alzheimer

## Índice

- [Color Game – Juego de Colorear Tangram para Personas con Alzheimer](#color-game--juego-de-colorear-tangram-para-personas-con-alzheimer)
  - [Índice](#índice)
  - [Descripción](#descripción)
  - [Características principales](#características-principales)
  - [Tecnologías y herramientas](#tecnologías-y-herramientas)
  - [Instalación y arranque](#instalación-y-arranque)
  - [Uso de la aplicación](#uso-de-la-aplicación)
    - [Perfiles de usuario](#perfiles-de-usuario)
    - [Iniciar partida](#iniciar-partida)
    - [Historial y métricas](#historial-y-métricas)
  - [Calidad de Software](#calidad-de-software)
    - [Estándares de commits](#estándares-de-commits)
    - [Control de versiones y ramas](#control-de-versiones-y-ramas)
    - [Usabilidad y accesibilidad](#usabilidad-y-accesibilidad)
    - [Análisis estático con SonarQube](#análisis-estático-con-sonarqube)
  - [Estructura del proyecto](#estructura-del-proyecto)



## Descripción

Color Game es una aplicación frontend (React + CSS puro) diseñada para ayudar a personas mayores con Alzheimer a ejercitar sus capacidades cognitivas a través de un juego de colorear tangram. El objetivo es hacer “match” entre piezas del tangram y su color o letra correspondiente, ralentizando el proceso mental y fomentando la estimulación cognitiva en entornos de cuidado.

El proyecto incluye un sistema de perfiles de doctores y pacientes, permitiendo llevar un historial de partidas con estadísticas de aciertos, errores y tiempo de juego, visualizadas en gráficas de barras.

> **Repositorio Frontend**: https://github.com/JeffersonDaviid/Color-Game  
> **Repositorio Backend**: *(en otro repositorio)*



## Características principales

- **Gestión de perfiles**: Login de doctores y selección de pacientes.  
- **Juego de tangram**: Matching de colores y letras en piezas.  
- **Historial por paciente**: Registros de aciertos, errores y tiempo.  
- **Visualización**: Gráficas de barras para comparar sesiones.  
- **Calidad y usabilidad**: Principios de accesibilidad, interfaz limpia y componentes reutilizables.  
- **Control de calidad**: Análisis estático con SonarQube, commits estandarizados, estrategia de branching GitFlow.



## Tecnologías y herramientas

- **Frontend**  
  - React (hooks y componentes funcionales)  
  - CSS puro (modular y basado en componentes)  
- **Control de calidad**  
  - SonarQube (análisis de código estático)  
  - ESLint & Prettier (estilos y linting)  
- **Control de versiones**  
  - GitFlow: `main`, `develop`, `release/*`, `bugfix/*`  
  - Commits con Convención [Conventional Commits](https://www.conventionalcommits.org/)  



## Instalación y arranque

1. Clona este repositorio:
   ```bash
   git clone https://github.com/JeffersonDaviid/Color-Game.git
   cd Color-Game
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Arranca en modo desarrollo:

   ```bash
   npm run dev
   ```

4. Para build de producción:

   ```bash
   npm run build
   ```



## Uso de la aplicación

### Perfiles de usuario

* **Doctor**: Inicia sesión con credenciales (email + contraseña).
* **Paciente**: Seleccionado por el doctor antes de iniciar partida.

### Iniciar partida

1. Selecciona paciente.
2. Haz clic en “Iniciar partida”.
3. El juego carga un tangram con piezas desordenadas.
4. Pinta la pieza al hacer match entre color y letra.

### Historial y métricas

* Cada sesión guarda:

  * Número de aciertos
  * Número de errores
  * Tiempo total de la partida
* La sección “Historial” muestra gráficas de barras comparativas por fecha.



## Calidad de Software

### Estándares de commits

Se emplea **Conventional Commits**:

* `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`
* Ejemplo: `feat(game): añadir validación de color en piezas`

### Control de versiones y ramas

Se sigue GitFlow:

* `main`: versión estable en producción
* `develop`: integración de funcionalidades
* `feature/<descripcion>`: nuevas características
* `release/<version>`: preparación de lanzamiento
* `bugfix/<descripcion>`: corrección de errores en preproducción

### Usabilidad y accesibilidad

* Componentes con roles ARIA y etiquetas descriptivas (`alt`, `aria-label`).
* Contraste de colores adaptado para baja visión.
* Navegación con teclado (tabindex, focus-visible).

### Análisis estático con SonarQube

* Cubre métricas de cobertura, bugs potenciales y code smells.


## Estructura del proyecto

```
Color-Game/
├── public/                  # Archivos estáticos
├── src/
│   ├── components/          # Componentes reutilizables
│   ├── pages/               # Vistas y rutas
│   ├── services/            # Llamadas a API
│   ├── hooks/               # Custom Hooks
│   ├── styles/              # CSS modular
│   └── utils/               # Funciones utilitarias
├── .env.example             # Ejemplo de variables de entorno
├── .eslintrc.js             # Configuración ESLint
├── sonar-project.properties # Configuración SonarQube
└── package.json
```


 
