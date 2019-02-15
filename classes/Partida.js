class Partida {

    constructor (id){
        this.id = id;
        this.cartes = '';
        this.torn = 0;
        this.pou = 0;
        this.data =
            {   id:this.id,
                cartes: this.cartes,
                torn:this.torn,
                pou:this.pou
            };
    }
}
exports.Partida = Partida;
