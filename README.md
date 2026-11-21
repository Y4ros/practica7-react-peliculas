# Práctica 7 - App de Películas con React

## Integrante
- Moises Yaroslav Fedkevich Perez Peres

## Datos del curso
- Profesor: Zeus Emanuel Gutiérrez Cobián
- Materia: Desarrollo de Aplicaciones Web en la Nube y Móviles
- Calendario escolar: 2026B
- Institución: CUCEI – Universidad de Guadalajara

## Objetivo
Desarrollar una aplicación web en React, usando Vite como entorno de desarrollo, que consuma la API de TMDB para mostrar un listado de películas y el detalle de cada una, con el código versionado en GitHub y publicado en Netlify.

## Tecnologías utilizadas
- React 18
- Vite
- React Router DOM
- CSS
- API de TMDB (The Movie Database)
- Git y GitHub
- Netlify

## Estructura general del proyecto
```
src/
  components/
    MovieCard.jsx     → tarjeta con póster y título
    MovieGrid.jsx     → consulta la API y muestra la cuadrícula de tarjetas
    Footer.jsx        → pie de página con datos del curso
  pages/
    LandingPage.jsx   → página principal
    MovieDetails.jsx  → vista de detalle de una película
  routers/
    AppRouter.jsx     → definición de rutas
  services/
    httpClient.js     → función para hacer peticiones a TMDB
  utils/
    getMovieImg.js    → arma la URL del póster (o imagen por defecto)
  img/
    placeholder.svg
  App.jsx
  main.jsx
  index.css
public/
  _redirects          → necesario para que las rutas funcionen en Netlify
  escudo-cucei.png
```

## Instalación y ejecución local
1. Clonar el repositorio:
   ```
   git clone [URL del repositorio]
   cd practica7-react-peliculas
   ```
2. Instalar dependencias:
   ```
   npm install
   ```
3. Crear un archivo `.env` en la raíz (puedes copiar `.env.example`) con tu API key de TMDB:
   ```
   VITE_TMDB_API_KEY=TU_API_KEY
   ```
4. Iniciar el servidor de desarrollo:
   ```
   npm run dev
   ```
5. Abrir `http://localhost:5173` en el navegador.

## Rutas utilizadas
| Ruta | Descripción |
| --- | --- |
| `/` | Página principal con el listado de películas |
| `/movies/:movieId` | Detalle de la película seleccionada |

## API utilizada
[TMDB - The Movie Database](https://developer.themoviedb.org/docs)

- `GET /discover/movie` → listado de películas.
- `GET /movie/{movieId}` → detalle de una película (título, géneros, descripción, póster).
- Imágenes: `https://image.tmdb.org/t/p/w500{poster_path}`

Las peticiones se hacen en español (`language=es-MX`). La API key se lee de la variable de entorno `VITE_TMDB_API_KEY` y no se sube al repositorio.

## Funcionamiento
- Al entrar, la página principal consulta TMDB y muestra una cuadrícula de tarjetas con el póster y el título de cada película.
- Al dar clic en una tarjeta se navega a `/movies/:movieId`, donde se muestran el póster, el título, los géneros, la fecha de estreno y la descripción.
- El encabezado y el enlace "Volver al listado" regresan a la página principal.
- El diseño se adapta a pantallas pequeñas.
- El pie de página muestra el nombre del integrante, el profesor, la materia, el calendario escolar, el mes y año y el escudo de CUCEI.

<!-- Agregar aquí las capturas: ![Página principal](capturas/principal.png) -->

## Links
- Repositorio en GitHub: [URL del repositorio]
- Despliegue en Netlify: [URL de Netlify]

## Despliegue en Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Variable de entorno: `VITE_TMDB_API_KEY`

## Conclusiones
Con esta práctica se aprendió a crear un proyecto de React con Vite, a organizarlo en componentes, a usar hooks (`useState`, `useEffect`, `useParams`) y a navegar entre vistas con React Router. También se practicó el consumo de una API externa, el manejo seguro de la API key con variables de entorno, el control de versiones con Git y GitHub y el despliegue de una SPA en Netlify, donde fue necesario el archivo `_redirects` para que las rutas funcionaran al recargar la página.
