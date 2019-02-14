const express = require('express');
const app=express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var baraja = [
    {pal:'Picas', num:'1'},
    {pal:'Picas', num:'2'},
    {pal:'Picas', num:'3'},
    {pal:'Picas', num:'4'},
    {pal:'Picas', num:'5'},
    {pal:'Picas', num:'6'},
    {pal:'Picas', num:'7'},
    {pal:'Picas', num:'8'},
    {pal:'Picas', num:'9'},
    {pal:'Picas', num:'10'},
    {pal:'Picas', num:'11'},
    {pal:'Picas', num:'12'},
    {pal:'trevol', num:'1'},
    {pal:'trevol', num:'2'},
    {pal:'trevol', num:'3'},
    {pal:'trevol', num:'4'},
    {pal:'trevol', num:'5'},
    {pal:'trevol', num:'6'},
    {pal:'trevol', num:'7'},
    {pal:'trevol', num:'8'},
    {pal:'trevol', num:'9'},
    {pal:'trevol', num:'10'},
    {pal:'trevol', num:'11'},
    {pal:'trevol', num:'12'},
    {pal:'corazones', num:'1'},
    {pal:'corazones', num:'2'},
    {pal:'corazones', num:'3'},
    {pal:'corazones', num:'4'},
    {pal:'corazones', num:'5'},
    {pal:'corazones', num:'6'},
    {pal:'corazones', num:'7'},
    {pal:'corazones', num:'8'},
    {pal:'corazones', num:'9'},
    {pal:'corazones', num:'10'},
    {pal:'corazones', num:'11'},
    {pal:'corazones', num:'12'},
    {pal:'diamante', num:'1'},
    {pal:'diamante', num:'2'},
    {pal:'diamante', num:'3'},
    {pal:'diamante', num:'4'},
    {pal:'diamante', num:'5'},
    {pal:'diamante', num:'6'},
    {pal:'diamante', num:'7'},
    {pal:'diamante', num:'8'},
    {pal:'diamante', num:'9'},
    {pal:'diamante', num:'10'},
    {pal:'diamante', num:'11'},
    {pal:'diamante', num:'12'}
];
var baraja2 = baraja.slice();

app.post('/iniciarJoc/codiPartida', (req, res)=>{
    
});

app.get('/api/baraja', (req, res)=>{
    res.send(baraja2);
});

app.get('/obtenirCarta/codiPartida', (req, res)=>{
    
    var robarCarta = baraja2[Math.floor(Math.random()*baraja2.length)];
    var index =baraja2.indexOf(robarCarta);
    baraja2.splice(index , 1);
    console.log(robarCarta);
    res.send(baraja2);
});

app.get('/mostrarCartes/codiPartida', (req, res)=>res.send('mostrar cartes xd'));

app.put('/tirarCarta/codiPartida/carta', (req, res)=>res.send('tirar carta xd'));

app.put('/moureJugador/codiPartida/aposta/quantitat', (req, res)=>res.send('ni idea xd'));

app.put('/moureJugador/codiPartida/passa', (req, res)=>res.send('passar xd'));

app.delete('/acabarJoc/codiPartida', (req, res)=>res.send('passar xd'));

app.listen(3000, ()=>console.log('inici servidor http://localhost:3000'));