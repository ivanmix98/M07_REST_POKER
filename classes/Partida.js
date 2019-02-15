class Partida {

    constructor (id,cartes){
        this.id = id;
        this.cartes = cartes;
        this.torn = 0;
        this.pou = 0;

        this.cartesTaula = this.cartes.splice(0,5);
    }
}

exports.Partida = Partida;
