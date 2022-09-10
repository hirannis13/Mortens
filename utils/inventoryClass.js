import Guitar from './guitarClass.js'


export default class Inventory {
    constructor() {
        this.guitars = [] ;
    }

    addGuitar (serialNumber , price , builder , model , type , backWood , topWood) {
        const newGuitar = new Guitar (serialNumber , price , builder , model , type , backWood , topWood)
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

    search(idealGuitar) {
        //Destructuring
        const {serialNumber , price , builder , model , type , backWood , topWood} = idealGuitar ;

        for (const guitar of this.guitars) {
            if (guitar.price <= price && guitar.builder===builder && guitar.model===model && guitar.type===type && guitar.backWood===backWood && guitar.topWood===topWood) {
                return guitar;
            }
        }

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