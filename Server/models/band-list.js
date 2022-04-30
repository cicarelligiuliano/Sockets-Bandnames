const Band = require('./band');

class BandList {
    constructor() {
        this.bands = [new Band('Metallica'), new Band('Hola'), new Band('Chau'), new Band('Tululu')];
    }

    addBand(name) {
        const newBand = new Band(name);

        this.bands.push(newBand);

        return this.bands;
    }

    removeBand(id) {
        this.bands = this.bands.filter((el) => el.id !== id);
    }

    getBands() {
        return this.bands;
    }

    increaseVotes(id) {
        this.bands = this.bands.map((el) => {
            if (el.id === id) {
                el.votes += 1;
            }

            return el;
        });
    }

    changeName(id, newName) {
        this.bands = this.bands.map((el) => {
            if (el.id === id) {
                el.name = newName;
            }

            return el;
        });
    }
}

module.exports = BandList;
