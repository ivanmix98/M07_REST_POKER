const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const c = require('./controladors');


const jwt = require("jsonwebtoken");
const usuaris = [
    {id:1, nom:"jugador1", password:"1234"},
    {id:2, nom:"jugador2", password:"5678"}
]



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/iniciarJoc/:codiPartida', c.IniciarJoc); //iniciar la partida
app.get('/obtenirCarta/:codiPartida', c.ObtenirCarta);

app.get('/mostrarCarta/:codiPartida', c.MostrarCartes);


app.put('/tirarCarta/:codiPartida/carta', c.TirarCarta);
app.put('/moureJugador/:codiPartida/aposta/:quantitat', c.MoureJugadorAposta);
app.put('/moureJugador/:codiPartida/passa', c.MoureJugadorPassa);

app.delete('/acabarJoc/:codiPartida', c.AcabarJoc);

app.listen(3000, ()=>console.log('inici servidor http://localhost:3000'));

app.post("/login", (req, res) => {
    if (!req.body.nom || !req.body.password) {
        res.status(400).send("Error");
        return;
    }
    const usuari = usuaris.find((u) => {
        return u.nom === req.body.nom && u.password === req.body.password;
    });

    const token = jwt.sign({
        sub: usuari.id,
        usuari: usuari.nom
    }, "clau", { expiresIn: "3 hours" });
    res.status(200).send({ success: 'Welcome to the JWT Auth', access_token: token })
});