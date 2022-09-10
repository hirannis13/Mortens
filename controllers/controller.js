export default class Controller {
    initialize(model,view) {
        this.model = model;
        this.view = view;
    }

    buildTemplate(guitar) {
        return `<div class = 'customerrow'>
            <h2>${guitar.getSerialNumber()}</h2>
            <h2>${guitar.getBuilder()}</h2>
            <div><button type='button' id='${guitar.getSerialNumber()}'>Delete</button></div>
            </div>`;
    }

    snSearch(serialNumber) {
        const guitar = this.model.guitarList.getGuitar(serialNumber);
        let template = '';
        
        if (guitar !== null) {
            template = this.buildTemplate(guitar);
        } else {
            template = `<div class = 'costumerrow'> 
                </div>`;
        }

        this.view.message(template);
    }




    showAllGuitars () {
        let template = '';
        for (const guitar of this.model.guitarList.allGuitars()) {
            template += this.buildTemplate (guitar);
        }
        this.view.message(template);
    }

    newGuitar(guitar) {
        const doesGuitarAlreadyExist = this.model.guitarList.getGuitar(guitar.serialNumber);

        if (doesGuitarAlreadyExist === null) {
            this.model.guitarList.addGuitar(guitar.serialNumber, guitar.builder);
            this.view.snackbar('The guitar was saved');
        } else {
            this.view.snackbar('The guitar already exists');
        }
    }

    deleteGuitar(sn) {
        this.model.guitarList.deleteGuitar(sn);
        this.view.snackbar('The guitar was deleted');
    }


}


