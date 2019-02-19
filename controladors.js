var b = require('./baralla');
var j = require('./classes/Jugada');
var p = require('./classes/Partida');
var Partidas = [];
var cont_Jugades = 0;


function IniciarJoc(req, res) {
    let codiP = req.params.codiPartida;

    let Partida = Partidas.find(part => part.id === codiP);

    if (Partida != null) { res.status(400).send("Ja existeix Aquesta Partida"); }

    else {
        let newBaralla = shuffle(b.baralla);
        let newPartida = new p.Partida(codiP, newBaralla, 1, 0);
        Partidas.push(newPartida);
        res.status(200).send(newPartida);
    }
}
function ObtenirCarta(req, res) {
    let codiP = req.params.codiPartida;

    let currentPartida = Partidas.find(part => part.id === codiP);

    if (currentPartida == null) { res.status(404).send("No s'ha trobat la partida"); }
    else {
        let cartes = currentPartida.cartes;
        let cartatirada = cartes.pop();
        res.status(200).send(cartatirada);
    }
}
function MostrarCartes(req, res) {
    let codiP = req.params.codiPartida;
    let currentPartida = Partidas.find(part => part.id === codiP);

    if (currentPartida == null) { res.status(404).send("No s'ha trobat la partida"); }
    else {
        res.send(currentPartida.cartesTaula);
    }
}
function TirarCarta(req, res) {
    let json = req.body;
    let codiP = req.params.codiPartida;

    let currentPartida = Partidas.find(part => part.id === codiP);

    if (currentPartida == null) { res.status(404).send("No s'ha trobat la partida"); }
    else {
        if(json.jugador == null || json.carta == null) res.status(400).send("No s'ha rebut les dades correctament");
        else{
            let jugada = new j.Jugada(cont_Jugades, 'TirarCarta');
            cont_Jugades++;
            jugada.jugador = json.jugador;
            jugada.carta = json.carta;
            console.log(jugada);
            currentPartida.jugadas.push(jugada);
            res.status(200).send("Jugada rebuda correctament");
        }
    }

    //currentPartida.jugadas.push(jugada);

    //res.send('TirarCarta');
}
function MoureJugadorAposta(req, res) {
    let json = req.body;
    let codiP = req.params.codiPartida;
    let quantitat = req.params.quantitat;

    let currentPartida = Partidas.find(part => part.id === codiP);

    if (currentPartida == null) { res.status(404).send("No s'ha trobat la partida"); }
    else {
        if(json.jugador == null) res.status(400).send("No s'ha rebut les dades correctament");
        else{
            let jugada = new j.Jugada(cont_Jugades, 'MoureJugadorAposta');
            cont_Jugades++;
            jugada.jugador = json.jugador;
            jugada.aposta = quantitat;
            console.log(jugada);
            currentPartida.jugadas.push(jugada);
            res.status(200).send("Jugada rebuda correctament");
        }
    }

}
function MoureJugadorPassa(req, res) {
    let json = req.body;
    let codiP = req.params.codiPartida;

    let currentPartida = Partidas.find(part => part.id === codiP);
    if (currentPartida == null) { res.status(404).send("No s'ha trobat la partida"); }
    else {
        if(json.jugador == null) res.status(400).send("No s'ha rebut les dades correctament");
        else{
            let jugada = new j.Jugada(cont_Jugades, 'Passa');
            cont_Jugades++;
            jugada.jugador = json.jugador;
            console.log(jugada);
            currentPartida.jugadas.push(jugada);
            res.status(200).send("Jugada rebuda correctament");
        }
    }
}
function AcabarJoc(req, res) {
    let codiP = req.params.codiPartida;
    let currentPartida = Partidas.find(part => part.id === codiP);

    if(Partidas.find(part => part.id === codiP) == null) res.status(400).send("Aquesta partida no Existeix");
    else{
        Partidas.splice(currentPartida,1);

        if(Partidas.find(part => part.id === codiP) == null){

            res.status(200).send("Partida finalitzada correctament");
        }else{
            res.status(500).send("Hi ha hagut un error al Finalitzar la partida");
        }
    }
}

function shuffle(a) {
    let ctr = a.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = a[ctr];
        a[ctr] = a[index];
        a[index] = temp;
    }
    return a;
}

exports.IniciarJoc = IniciarJoc;
exports.ObtenirCarta = ObtenirCarta;
exports.MostrarCartes = MostrarCartes;
exports.TirarCarta = TirarCarta;
exports.MoureJugadorAposta = MoureJugadorAposta;
exports.MoureJugadorPassa = MoureJugadorPassa;
exports.AcabarJoc = AcabarJoc;
