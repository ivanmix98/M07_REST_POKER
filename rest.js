const express = require('express');
const app=express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var baraja = [
    {categoria:'Ordinador', nom:'ASUS', preu:1800},
    {categoria:'Ordinador', nom:'MSI', preu:800},
    {categoria:'Ratolí', nom:'LOGITECH', preu:50},
    {categoria:'Ratolí', nom:'MICROSOFT', preu:26},
    {categoria:'Monitor', nom:'LG', Preu:800}
];

app.post('/iniciarJoc/codiPartida', (req, res)=>res.send('iniciar joc xd'));

app.get('/obtenirCarta/codiPartida', (req, res)=>res.send('obtenir cartes xd'));

app.get('/mostrarCartes/codiPartida', (req, res)=>res.send('mostrar cartes xd'));

app.put('/tirarCarta/codiPartida/carta', (req, res)=>res.send('tirar carta xd'));

app.put('/moureJugador/codiPartida/aposta/quantitat', (req, res)=>res.send('ni idea xd'));

app.put('/moureJugador/codiPartida/passa', (req, res)=>res.send('passar xd'));

app.delete('/acabarJoc/codiPartida', (req, res)=>res.send('passar xd'));

app.listen(3000, ()=>console.log('inici servidor http://localhost:3000'));