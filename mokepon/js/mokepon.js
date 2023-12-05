alert("hola kikeriveros bienvenido a mokepon");

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascotas");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputratigueya = document.getElementById("ratigueya")

  if (inputHipodoge.checked) {
    alert("Seleccionaste a Hipodoge");
  } else if (inputCapipepo.checked) {
    alert("Seleccionaste ha capipepo");
  } else if (inputratigueya.checked) {
    alert("Seleccionaste ha ratigueya");
  } else {
    alert('Selecciona una mascota')
  }
}

window.addEventListener("load", iniciarJuego);
