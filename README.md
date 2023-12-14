# ejecicio de mokepon
 
# Juego de batallas de mokepon

## Descripción

Este juego es una batalla de mokepon entre dos jugadores. Cada jugador elige un mokepon y luego, por turnos, seleccionan un ataque para lanzarle al otro mokepon. El mokepon que reciba más daño pierde.

## Instalación

Para instalar el juego, sigue estos pasos:

1. Clona el repositorio de GitHub:
git clone https://github.com/jorgeEnriqueRiveros/ejerciciosplatzi-html-javascripts

2. Instala las dependencias:
   npm install

3. Inicia el juego:
npm start

Cómo jugar
Para jugar, sigue estos pasos:

Selecciona un mokepon.
Elige un ataque.
Lanza el ataque al mokepon del oponente.
El juego termina cuando uno de los mokepon pierde todos sus puntos de vida.

Controles
Tecla w: Mover la mascota hacia arriba.
Tecla s: Mover la mascota hacia abajo.
Tecla a: Mover la mascota hacia la izquierda.
Tecla d: Mover la mascota hacia la derecha.
Ataques
FUEGO: Daño de tipo fuego.
AGUA: Daño de tipo agua.
TIERRA: Daño de tipo tierra.
Equilibrio de los ataques
Los ataques de tipo fuego son fuertes contra los ataques de tipo tierra, pero débiles contra los ataques de tipo agua.

Los ataques de tipo agua son fuertes contra los ataques de tipo fuego, pero débiles contra los ataques de tipo tierra.

Los ataques de tipo tierra son fuertes contra los ataques de tipo agua, pero débiles contra los ataques de tipo fuego.

Mejoras futuras
Agregar más mokepon.
Agregar más ataques.
Agregar un modo multijugador.
Licencia
El juego está licenciado bajo la licencia MIT.

Además de las instrucciones de instalación y juego, también he añadido los siguientes elementos:

Iconos para representar los ataques.
Una tabla que muestra el equilibrio de los ataques.
Una sección de mejoras futuras.

const icons = {
  javascript: "https://iconify.design/icon/javascript",
  html: "https://iconify.design/icon/html5",
  css: "https://iconify.design/icon/css3",
};

const readme = `
# Juego de batallas de mokepon

## Descripción

Este juego es una batalla de mokepon entre dos jugadores. Cada jugador elige un mokepon y luego, por turnos, seleccionan un ataque para lanzarle al otro mokepon. El mokepon que reciba más daño pierde.

## Instalación

Para instalar el juego, sigue estos pasos:

* **[icono](${icons.javascript}) Clona el repositorio de GitHub:**|

* ## Cómo jugar

Para jugar, sigue estos pasos:

* **[icono](${icons.html}) Selecciona un mokepon:**

* Tecla w: Mover la mascota hacia arriba.
Tecla s: Mover la mascota hacia abajo.
Tecla a: Mover la mascota hacia la izquierda.
Tecla d: Mover la mascota hacia la derecha.
Ataques
[icono](icons.css)FUEGO:∗∗Da 
n
~
 odetipofuego.∗∗∗[icono]({icons.css}) AGUA: Daño de tipo agua.
icono TIERRA: Daño de tipo tierra.
Equilibrio de los ataques
Los ataques de tipo fuego son fuertes contra los ataques de tipo tierra, pero débiles contra los ataques de tipo agua.

Los ataques de tipo agua son fuertes contra los ataques de tipo fuego, pero débiles contra los ataques de tipo tierra.

Los ataques de tipo tierra son fuertes contra los ataques de tipo agua, pero débiles contra los ataques de tipo fuego.

Mejoras futuras
Agregar más mokepon.
Agregar más ataques.
Agregar un modo multijugador.
Licencia
El juego está licenciado bajo la licencia MIT.

const icons = {
  javascript: "https://iconify.design/icon/javascript?size=20",
  html: "https://iconify.design/icon/html5",
  css: "https://iconify.design/icon/css3",
};
tutorials = {
  javascript: {
    url: "https://www.youtube.com/watch?v=vFifttmO-Lk",
    topics: ["Introducción a JavaScript", "Funciones", "Objetos", "Arrays"],
  },
  html: {
    url: "https://www.youtube.com/watch?v=SaO1GMv3nuY",
    topics: ["Estructura básica de un documento HTML", "Elementos HTML", "Atributos HTML"],
  },
  css: {
    url: "https://www.youtube.com/watch?v=R-Is42RK8W8",
    topics: ["Introducción a CSS", "Propiedades CSS", "Reglas CSS"],
  },
};

const readme = `
# Juego de batallas de mokepon

## Descripción

Este juego es una batalla de mokepon entre dos jugadores. Cada jugador elige un mokepon y luego, por turnos, seleccionan un ataque para lanzarle al otro mokepon. El mokepon que reciba más daño pierde.

## Instalación

Para instalar el juego, sigue estos pasos:

* **[icono](${icons.javascript}) Clona el repositorio de GitHub:**
## Tutoriales

Aquí tienes algunos tutoriales que te ayudarán a aprender los lenguajes usados en este juego:

* **[JavaScript](https://${tutorials.javascript.url})**
    * **${tutorials.javascript.topics.join("**, **")}**
* **[HTML](https://${tutorials.html.url})**
    * **${tutorials.html.topics.join("**, **")}**
* **[CSS](https://${tutorials.css.url})**
    * **${tutorials.css.topics.join("**, **")}**
    * 






