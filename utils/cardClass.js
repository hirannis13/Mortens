export default class Card {
    constructor (serialNumber,builder) {
        this.serialNumber = serialNumber ; 
        this.builder = builder ;
    }

    getSerialNumber() {
        return this.serialNumber ;
    }

    getBuilder() {
        return this.builder ;
    }

    
}