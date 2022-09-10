import Inventory from '../utils/inventoryClass.js'

export default class Model {
    constructor() {
        this.guitarList = new Inventory;
        this.guitarList.addGuitar('Mylist', 'to-do list');
        this.guitarList.addGuitar('Mylist2', 'to-do list');
        this.guitarList.addGuitar('Mylist3', 'to-do list');
        this.guitarList.addGuitar('Mylist4', 'to-do list');
        this.guitarList.addGuitar('Mylist5', 'to-do list');
        this.guitarList.addGuitar('Mylist6', 'to-do list');

    }
}