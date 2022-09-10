import Guitar from './guitarClass.js'


export default class Inventory {
    constructor() {
        this.guitars = [] ;
    }

    addGuitar (serialNumber , builder ) {
        const newGuitar = new Guitar (serialNumber , builder)
        this.guitars.push(newGuitar) ; 
    }

    getGuitar (serialNumber) {
        for (const guitar of this.guitars) {
            if (serialNumber === guitar.serialNumber) {
                return guitar ; 
            }
        }
        //The value null represents the intentional absence of an object value
        return null;
    }



allGuitars() {
    return this.guitars;
}

deleteGuitar(sn) {
    const index=this.guitars.map(guitar => guitar.serialNumber).indexOf(sn);
    this.guitars.splice(index, 1);
}

}