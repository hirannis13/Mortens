import Inventory from '../utils/inventoryClass.js'

export default class Model {
    constructor() {
        this.cardList = new Inventory;
        this.cardList.addCard('Mylist', 'to-do list');
        this.cardList.addCard('Mylist2', 'to-do list');
        this.cardList.addCard('Mylist3', 'to-do list');
        this.cardList.addCard('Mylist4', 'to-do list');
        this.cardList.addCard('Mylist5', 'to-do list');
        this.cardList.addCard('Mylist6', 'to-do list');

    }
}