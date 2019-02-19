const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const c = require('./controladors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/iniciarJoc/:codiPartida', c.IniciarJoc); //iniciar la partida
app.get('/obtenirCarta/:codiPartida/:jugador', c.ObtenirCarta); //roba 1 carta de la baraja para el jugador especificado

app.get('/mostrarCarta/:codiPartida', c.MostrarCartes); //muestra las 5 cartas de la mesa
app.get('/mostrarCartes/:codiPartida/:jugador', c.MostrarCartesJugador); //muestra las cartas que posee el jugador 1 o 2

app.put('/tirarCarta/:codiPartida/carta', c.TirarCarta);
app.put('/moureJugador/:codiPartida/aposta/:quantitat', c.MoureJugadorAposta);
app.put('/moureJugador/:codiPartida/passa', c.MoureJugadorPassa);

app.delete('/acabarJoc/:codiPartida', c.AcabarJoc);

app.listen(3000, ()=>console.log('inici servidor http://localhost:3000'));
