const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar");
sectionReiniciar.style.display = "none";

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
const spanVidasJugador = document.getElementById("vida-jugador");
const spanVidasEnemigo = document.getElementById("vida-enemigo");

const sectionMensajes = document.getElementById("resultado-combate");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");

const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const contenedorAtaques = document.getElementById("contenedor-ataques");
const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");
// todas las variables del juego
let jugadorId = [];
let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador;
let mascotaJugadorObjeto
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let botones = []; //se crea en la clase 56
let indexAtaqueEnemigo; //se crea en la clase 58
let indexAtaqueJugador; //se crea en la clase 58
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image();
mapaBackground.src = '/images/mokemap.jpg'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 700

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 500 / 500

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
  constructor(nombre, foto, vida, fotoMapa) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.ancho = 80;
    this.alto = 80;
    this.x = aleatorio(0, mapa.width - this.ancho);
    this.y = aleatorio(0, mapa.height - this.alto);
    this.mapaFoto = new Image(); 
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }

  pintarMokepon() {
    lienzo.drawImage(
      this.mapaFoto,
      this.x,
      this.y,
      this.ancho,
      this.alto
    );
  }
}

let hipodoge = new Mokepon("Hipodoge", "/images/Hipodoge.png", 5, '/images/tucanlio.png');
let capipepo = new Mokepon("Capipepo", "/images/Capipepo.png", 5, '/images/flaminllo.png');
let ratigueya = new Mokepon("Ratigueya", "/images/Ratigueya.png", 5, '/images/serpentin.png');

let hipodogeEnemigo = new Mokepon("Hipodoge Enemigo", "/images/Hipodoge.png", 5, '/images/tucanlio.png');
let capipepoEnemigo = new Mokepon("Capipepo Enemigo", "/images/Capipepo.png", 5, '/images/flaminllo.png');
let ratigueyaEnemigo = new Mokepon("Ratigueya Enemigo", "/images/Ratigueya.png", 5, '/images/serpentin.png');

function pintarCanvas() {
  mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
  mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
  lienzo.clearRect(0, 0, mapa.width, mapa.height)
  lienzo.drawImage(
    mapaBackground,
    0,
    0,
    mapa.width,
    mapa.height
  );
  mascotaJugadorObjeto.pintarMokepon();
  hipodogeEnemigo.pintarMokepon();
  capipepoEnemigo.pintarMokepon();
  ratigueyaEnemigo.pintarMokepon();
}

capipepo.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" }
);
ratigueya.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);
hipodoge.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);
capipepoEnemigo.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" }
);
ratigueyaEnemigo.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);
hipodogeEnemigo.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);
mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionVerMapa.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
           <p>${mokepon.nombre}</p>
           <img src=${mokepon.foto} alt="Imagen de ${mokepon.nombre}">
        </label>
        `;
    contenedorTarjetas.innerHTML += opcionDeMokepones;
    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
  });

  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonReiniciar.addEventListener("click", reiniciarJuego);

  unirseAlJuego()
}
function unirseAlJuego() {
  fetch('http://localhost:8080/unirse')
    .then(function (res) {
      if (res.ok) {
      res.text()
      .then(function (respuesta) {
        console.log(respuesta)
        jugadorId = respuesta
      })
    }
  })
}
function seleccionarMascotaJugador() {
    if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id;
    mascotaJugador = inputHipodoge.id;
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    mascotaJugador = inputCapipepo.id;
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id;
  } else {
    alert("Selecciona una mascota");
    return;
  }

  seleccionarMokepon(mascotaJugador);

  sectionSeleccionarMascota.style.display = "none";
  extraerAtaques(mascotaJugador);
  sectionVerMapa.style.display = "flex";
  iniciarMapa()
}

function seleccionarMokepon(mascotaJugador) {
  fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      mokepon: mascotaJugador
    })
  })
}

function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}

//Se crea en la clase 55
function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `;
    contenedorAtaques.innerHTML += ataquesMokepon;
  });
  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");
  botones = document.querySelectorAll(".BAtaque"); //Se resuelve en la clase 56
}
//Se crea secuencia Ataque
function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        ataqueJugador.push("FUEGO");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else if (e.target.textContent === "💧") {
        ataqueJugador.push("AGUA");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else {
        ataqueJugador.push("TIERRA");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      }
      ataqueAleatorioEnemigo();
    });
  });
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(0, mokepones.length - 1);
  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
  ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques;
  secuenciaAtaque();
}
function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);
  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("FUEGO");
  } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
    ataqueEnemigo.push("AGUA");
  } else {
    ataqueEnemigo.push("TIERRA");
  }
  iniciarCombate();
  combate()
}
function iniciarCombate() {
  if (ataqueJugador.length === 5) {
    combate();
  }
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}
function combate() {
  for (let index = 0; index < ataqueJugador.length; index++) {
    console.log(ataqueJugador[index]);
    if (ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponentes(index, index);
      crearMensaje("EMPATE");
    } else if (
      ataqueJugador[index] === "FUEGO" &&
      ataqueEnemigo[index] === "TIERRA"
    ) {
      indexAmbosOponentes(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "AGUA" &&
      ataqueEnemigo[index] === "FUEGO"
    ) {
      indexAmbosOponentes(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "TIERRA" &&
      ataqueEnemigo[index] === "AGUA"
    ) {
      indexAmbosOponentes(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      crearMensaje("PERDISTE");
      victoriasEnemigo++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }
  contadorVidas();
}
function contadorVidas() {
  if (victoriasJugador === victoriasEnemigo) {
    crearMensajeFinal("¡ESTO FUE UN EMPATE! 🤷‍♂️");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("¡FELICITACIONES, GANASTE! 😁👍");
  } else {
    crearMensajeFinal("LO SIENTO, PERDISTE! 👎🤖");
  }
}
function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");
 
  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;
  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function pintarCanvas() {
  mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
  mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
  lienzo.clearRect(0, 0, mapa.width, mapa.height)
  lienzo.drawImage(
      mapaBackground,
      0,
      0,
      mapa.width,
      mapa.height
  )
    mascotaJugadorObjeto.pintarMokepon()
   
    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    if (mascotaJugadorObjeto.velocidadX !== 0 ||  mascotaJugadorObjeto.velocidadY !== 0) {
      revisarColision(hipodogeEnemigo)
      revisarColision(capipepoEnemigo)
      revisarColision(ratigueyaEnemigo)
    }
}

function enviarPosicion(x, y) {
  fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      x,
      y
    })
  })
}

function moverDerecha() {
 mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda() {
 mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo() {
 mascotaJugadorObjeto.velocidadY = 5
}
function moverArriba() {
 mascotaJugadorObjeto.velocidadY = -5
}
function detenerMovimiento() {
 mascotaJugadorObjeto.velocidadX = 0
 mascotaJugadorObjeto.velocidadY = 0
}
function sePresionoUnaTecla(event) {
  switch (event.key) {
    case 'w':
        moverArriba()
        break
    case 's':
      moverAbajo()
        break
        case 'a':
        moverIzquierda()
      break
        case 'd':
       moverDerecha()
        break
    default:
        break
  }
}

function iniciarMapa() {
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
  intervalo = setInterval(pintarCanvas, 50)
  window.addEventListener('keydown', sePresionoUnaTecla)
  window.addEventListener('keyup', detenerMovimiento)
}
function obtenerObjetoMascota() {
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      return mokepones[i];
    }
  }
}

function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y
  const abajoEnemigo = enemigo.y + enemigo.alto
  const derechaEnemigo = enemigo.x + enemigo.ancho
  const izquierdaEnemigo = enemigo.x 

  const arribaMascota = mascotaJugadorObjeto.y
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
  const izquierdaMascota = mascotaJugadorObjeto.x 
  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo
  ) {
    return
  }
  detenerMovimiento()
  clearInterval(intervalo)
  sectionSeleccionarAtaque.style.display = "flex";
  sectionVerMapa.style.display = "none";
  seleccionarMascotaEnemigo(enemigo);
}
window.addEventListener("load", iniciarJuego);
