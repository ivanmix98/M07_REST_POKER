var b = require('./baralla');
var j = require('./classes/Jugador');
var p = require('./classes/Partida');
var Partidas=[];

function IniciarJoc(req,res){
    let codiP = req.params.codiPartida;

    let Partida = Partidas.find(part => part.id === codiP);

    if(Partida != null){ res.status(404).send("Ja existeix Aquesta Partida"); }

    else{
        let newBaralla = shuffle(b.baralla);
        let newPartida = new p.Partida(codiP,newBaralla,1,0);
        Partidas.push(newPartida);
        res.status(200).send(newPartida);
    }
}
function Baraja(req,res){
    res.send(b.baralla);
}
function ObtenirCarta(req,res){
    let codiP = req.params.codiPartida;

    let currentPartida = Partidas.find(part => part.id === codiP);

    if(currentPartida == null){ res.status(404).send("No s'ha trobat la partida"); }
    else{
        let cartes = currentPartida.cartes;
        res.send(cartes.pop());
    }
}
function ObtenirCartes(req,res){
    let baraja2 = b.baralla;
    let grupcartas = [];

    for (let i =0;i<5;i++){
        let index;
        let carta = baraja2[Math.floor(Math.random()*baraja2.length)];
        grupcartas.push(carta);
        index =baraja2.indexOf(carta);
        baraja2.splice(index , 1);
    }
    res.send(grupcartas);
}
function MostrarCartes(req,res){
    res.send('MostrarCartes');
}
function TirarCarta(req,res){
    res.send('TirarCarta');
}
function MoureJugadorAposta(req,res){
    res.send('Moure Jugador Aposta');
}
function MoureJugadorPassa(req,res){
    res.send('Moure Jugador Passa');
}
function AcabarJoc(req,res){
    res.send('Acabar Joc');
}

//Les nostres funcions

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

exports.IniciarJoc          = IniciarJoc;
exports.Baraja              = Baraja;
exports.ObtenirCarta        = ObtenirCarta;
exports.ObtenirCartes       = ObtenirCartes;
exports.MostrarCartes       = MostrarCartes;
exports.TirarCarta          = TirarCarta;
exports.MoureJugadorAposta  = MoureJugadorAposta;
exports.MoureJugadorPassa   = MoureJugadorPassa;
exports.AcabarJoc           = AcabarJoc;
