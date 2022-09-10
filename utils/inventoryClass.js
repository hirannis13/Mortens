import Card from './cardClass.js'


export default class Inventory {
    constructor() {
        this.cards = [] ;
    }

    addCard (listName , listType ) {
        const newCard = new Card (listName , listType)
        this.cards.push(newCard) ; 
    }

    getCard (listName) {
        for (const card of this.cards) {
            if (listName === card.listName) {
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
    const index=this.cards.map(card => card.listName).indexOf(sn);
    this.cards.splice(index, 1);
}

}