function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Rock"
    } else if (jugada == 2) {
        resultado = "Paper"
    } else if (jugada == 3) {
        resultado = "Scissors"
    } else {
        resultado = "MAL ELEGIDO"
    }
    return resultado
}

// 1 es rock, 2 es paper, 3 es scissors
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
pc = aleatorio(1,3)
jugador = prompt("Elige: 1 para rock, 2 para parper, 3 para scissor")

alert("PC elige: " + eleccion(pc))
alert("Tu eliges: " + eleccion(jugador))

//COMBATE
    if (pc == jugador) {
        alert("EMPATE")
    } else if (jugador == 1 && pc == 3) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE")
    }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces. ") 
