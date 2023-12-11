const seccionReiniciar = document.getElementById("seccion-reiniciar");
  seccionReiniciar.style.display = "none";
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar");

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");

const spanMascotaJugador = document.getElementById('mascota-jugador');

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const seccionMensajes = document.getElementById("resultado");
const ataquesjugador = document.getElementById("ataques-jugador");
const spanAtaquesMokeponEnemigo = document.getElementById("ataques-enemigo");

const radioHipodoge = document.getElementById("Hipodoge");
const radioCapipepo = document.getElementById("Capipepo");
const radioRatigueya = document.getElementById("Ratigueya");

const mascotaJugador = document.getElementById("mascota-jugador");
const mascotaEnemigo = document.getElementById("mascota-enemigo");
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques');

let ataqueJugador = []
let ataqueEnemigo = []
let mokepones = []
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueya
let ataquesMokepon
let botonFuego 
let botonAgua 
let botonPlanta 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;


class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}

let hipodoge = new Mokepon('Hipodoge', '/mokepon/images/Hipodoge.png', 5);
let capipepo = new Mokepon('Capipepo', '/mokepon/images/Capipepo.png', 5);
let ratigueya = new Mokepon('Ratigueya', '/mokepon/images/Ratigueya.png', 5);

hipodoge.ataques.push(
  { nombre: "💧", id: "boton-agua"},
  { nombre: "💧", id: "boton-agua"},
  { nombre: "💧", id: "boton-agua"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "🌼", id: "boton-planta"},
);
capipepo.ataques.push(
  { nombre: "🌼", id: "boton-planta"},
  { nombre: "🌼", id: "boton-planta"},
  { nombre: "🌼", id: "boton-planta"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "💧", id: "boton-agua"},
);
ratigueya.ataques.push(
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "🌼", id: "boton-planta"},
  { nombre: "💧", id: "boton-agua"},
);

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {

  sectionSeleccionarAtaque.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre}>
      <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
      <p>${mokepon.nombre}</p>
      <img src=${mokepon.foto} alt=${mokepon.nombre}>
      </label>
    `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    inputHipodoge = document.getElementById('Hipodoge');
    inputCapipepo = document.getElementById('Capipepo');
    inputRatigueya = document.getElementById('Ratigueya');
  })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    botonReiniciar.addEventListener("click", reiniciarPartida);
}
function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = "none";
  sectionSeleccionarAtaque.style.display = "flex";
  let mascotaJugador
  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id
    mascotaJugador = inputHipodoge.id
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id
    mascotaJugador = inputCapipepo.id
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id
    mascotaJugador = inputRatigueya.id
  } else {
    alert ('Selecciona una mascota')
  }
  
  botonMascotaJugador.disabled = true;
  extraerAtaques(mascotaJugador)
  seleccionarMascotaEnemigo(mascotaEnemigo);
}
function extraerAtaques(mascotaJugador) {
  let ataques
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}
function mostrarAtaques(ataques) {
  ataques.forEach((ataque) =>{
    ataquesMokepon = `
    <button class="botones-ataques BAtaque" id=${ataque.id}> ${ataque.nombre} </button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon
})
  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonPlanta = document.getElementById("boton-planta");
  botones = document.querySelectorAll('.BAtaque')
}
function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if (e.target.textContent === '🔥') {
        ataqueJugador.push('FUEGO');
        console.log(ataqueJugador)
        boton.style.background = '#112f58';
      }else if (e.target.textContent === '💧') {
        ataqueJugador.push('AGUA');
        console.log(ataqueJugador)
        boton.style.background = '#112f58';
      } else {
        ataqueJugador.push('PLANTA');
        console.log(ataqueJugador)
        boton.style.background = '#112f58';
      }
      ataqueAleatorio()
    })
  })
}
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(0, mokepones.length -1);
  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
  secuenciaAtaque()
}
function ataqueAleatorio() {
  let ataque = aleatorio(0, ataquesMokeponEnemigo.length -1);

  if (ataque == 0 || ataque == 1) {
    ataqueEnemigo.push = ("FUEGO");
  } else if (ataque == 3 || ataque == 4) {
    ataqueEnemigo.push = ("AGUA");
  } else {
    ataqueEnemigo.push = ("PLANTA");
  }
  iniciarPelea();
}
function iniciarPelea () {
  if (ataqueJugador.length === 5) {
    combate()
  }
}
function indexAmbosOponente(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}
function combate() {
  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponente(index, index)
      crearMensaje('EMPATE')
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'PLANTA') { 
      indexAmbosOponente(index, index)
      crearMensaje('GANASTE')
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else if (ataquejugador[index] === "AGUA" && ataquejugador[index] === "FUEGO") {
      indexAmbosOponente(index, index)
      crearMensaje('GANASTE')
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else if (ataqueJugador[index] === "PLANTA" && ataqueEnemigo[index] === 'AGUA' ) {
      indexAmbosOponente(index, index)
      crearMensaje('GANASTE')
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else {
      indexAmbosOponente(index, index)
      crearMensaje('PERDISTE')
      victoriasEnemigo++
      spanVidasEnemigo.innerHTML = victoriasEnemigo
    }
  }
  revisarVictorias();
}

function revisarVictorias() {
  if (victoriasJugador == victoriasEnemigo) {
    crearMensajeFinal("Esto fue un empate!!!");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("FELICITACIONES! Ganaste :)");
  } else {
    crearMensajeFinal("Lo siento perdiste :(");
  }
}
function crearMensaje(resultado) {
  let nuevoAtaqueJugador = document.createElement("p");
  let nuevoAtaqueEnemigo = document.createElement("p");

  seccionMensajes.innerHTML = resultado;
  nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;

  ataquesjugador.appendChild(nuevoAtaqueJugador);
  ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonPlanta.disabled = true;

  seccionMensajes.innerHTML = resultadoFinal;

  seccionReiniciar.style.display = "flex";
}

function reiniciarPartida() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
