const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const c = require('./controladors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/iniciarJoc/codiPartida', c.IniciarJoc);

app.get('/api/baraja', c.Baraja);
app.get('/obtenirCarta/codiPartida', c.ObtenirCarta);
app.get('/mostrarCartes/codiPartida', c.MostrarCartes);

app.put('/tirarCarta/codiPartida/carta', c.TirarCarta);
app.put('/moureJugador/codiPartida/aposta/quantitat', c.MoureJugadorAposta);
app.put('/moureJugador/codiPartida/passa', c.MoureJugadorPassa);

app.delete('/acabarJoc/codiPartida', c.AcabarJoc);

app.listen(3000, ()=>console.log('inici servidor http://localhost:3000'));
