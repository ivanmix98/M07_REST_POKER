var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();

var jugada = JSON.stringify({
    "jugador":"Jugador1",
    "carta":{
        "pal":"trevol",
        "num":"4"
    }
});

var aposta = JSON.stringify({
    "jugador":"Jugador1",
    "aposta":"5"
});

var passa = JSON.stringify({
    "jugador":"Jugador1",
    "aposta":"5"
});

//FUNCIONS

//IniciarJoc(1);
//ObtenirCarta(1,1);
//MostrarCartes(1);
//TirarCarta(1,jugada);
//MoureJugadorAposta(1,aposta,5);
//MoureJugadorPassa(1,passa);
AcabarJoc(1);


async function IniciarJoc(codiPartida) {
    const url='http://localhost:3000/iniciarJoc/' + codiPartida;
    Http.open("POST", url);
    Http.send();
    Http.onreadystatechange = function() {
        if (this.readyState === 4) { console.log(Http.responseText) }

    }
}

function ObtenirCarta(codiPartida) {
    const url='http://localhost:3000/obtenirCarta/' + codiPartida;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = function() {
        if (this.readyState === 4) {
            console.log(Http.responseText);
        }
    }
}

function MostrarCartes(codiPartida) {
    const url='http://localhost:3000/mostrarCarta/' + codiPartida;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = function() {
        if (this.readyState === 4) {
            console.log(Http.responseText);
        }
    }
}

function TirarCarta(codiPartida,jugada) {
    const url='http://localhost:3000/tirarCarta/' + codiPartida + '/carta';

    Http.open("PUT", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(jugada);
    Http.onreadystatechange = function() {
        if (this.readyState === 4) {
            console.log(Http.responseText);
        }
    }
}

function MoureJugadorAposta(codiPartida,aposta,quantitat) {
    const url='http://localhost:3000/moureJugador/' + codiPartida + '/aposta/' + quantitat;

    Http.open("PUT", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(aposta);
    Http.onreadystatechange = function() {
        if (this.readyState === 4) {
            console.log(Http.responseText);
        }
    }
}

function MoureJugadorPassa(codiPartida,passa) {
    const url='http://localhost:3000/moureJugador/' + codiPartida + '/passa';

    Http.open("PUT", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(passa);
    Http.onreadystatechange = function() {
        if (this.readyState === 4) {
            console.log(Http.responseText);
        }
    }
}

function MoureJugadorPassa(codiPartida,passa) {
    const url='http://localhost:3000/moureJugador/' + codiPartida + '/passa';

    Http.open("PUT", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(passa);
    Http.onreadystatechange = function() {
        if (this.readyState === 4) {
            console.log(Http.responseText);
        }
    }
}

function AcabarJoc(codiPartida) {
    const url='http://localhost:3000/acabarJoc/' + codiPartida;
    Http.open("DELETE", url);
    Http.send();
    Http.onreadystatechange = function() {
        if (this.readyState === 4) {
            console.log(Http.responseText);
        }
    }
}




