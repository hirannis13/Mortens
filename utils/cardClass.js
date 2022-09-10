export default class Card {
    constructor (listName,listType) {
        this.listName = listName ; 
        this.listType = listType ;
    }

    getListName() {
        return this.listName ;
    }

    getListType() {
        return this.listType ;
    }

    
}