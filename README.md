# Stream App

Stream app es una app hecha con react inspirada en Disney + con algunos toques de Netflix

## Tecnologias

Este proyecto cuenta con las siguientes tecnologias y/o herramientas:

- React
- React Router Dom
- Context API
- [Axios](https://axios-http.com/docs/intro)
- [Firebase](firebase.google.com/) para autenticaciones
- [React Bootstrap](react-bootstrap.github.io/)
- Api proveniente de [The Movie Database](https://www.themoviedb.org/movie?language=es-es)

# Instructions

#### `npm start` → Para levantar el servidor

Y ya estarian todas las instrucciones...

Se utilizo Firebase Auth para lo que es **Login y Register** mediante email y clave

## Credenciales

#### Usuario: admin@admin.com

#### Clave: 123456

## Routes

Una vez iniciado el proyecto o visto el código notarás la diversidad de endpoints con la que cuenta TMVDB, sin embargo, acá te dejo los que se usaron.

- ### Peliculas por categoria - GET `api.themoviedb.org/3/discover/movie`
  - #### Parametros: genre_id (String)
- ### Detalles de la pelicula - GET `api.themoviedb.org/3/movie/:id`
  - #### Parametros: id (integer), directiva para unificar consultas
- ### Peliculas en reproduccion/estrenadas - GET `api.themoviedb.org/3/movie/now_playing`
- ### Peliculas populares - GET `/api.themoviedb.org/3/movie/popular`
- ### Proximos estrenos - GET `api.themoviedb.org/3/movie/upcoming`

**Nota: La api de TMVDB incluye una apikey que por obvias razones no se mostrara en las rutas**
