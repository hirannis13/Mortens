import Card from './cardClass.js'


export default class Inventory {
    constructor() {
        this.cards = [] ;
    }

    addCard (serialNumber , builder ) {
        const newCard = new Card (serialNumber , builder)
        this.cards.push(newCard) ; 
    }

    getCard (serialNumber) {
        for (const card of this.cards) {
            if (serialNumber === card.serialNumber) {
                return card ; 
            }
        }
        //The value null represents the intentional absence of an object value
        return null;
    }



allCards() {
    return this.cards;
}

deleteCard(sn) {
    const index=this.cards.map(card => card.serialNumber).indexOf(sn);
    this.cards.splice(index, 1);
}

}