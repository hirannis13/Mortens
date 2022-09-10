export default class Controller {
    initialize(model,view) {
        this.model = model;
        this.view = view;
    }

    buildTemplate(card) {
        return `<div class = 'customercard'>
            <h2>${card.getSerialNumber()}</h2>
            <h2>${card.getBuilder()}</h2>
            <button type='button' id='${card.getSerialNumber()}'>Delete</button>
            </div>`;
    }



    showAllCards () {
        let template = '';
        for (const card of this.model.cardList.allCards()) {
            template += this.buildTemplate (card);
        }
        this.view.message(template);
    }

    newCard(card) {
        const doesCardAlreadyExist = this.model.cardList.getCard(card.serialNumber);

        if (doesCardAlreadyExist === null) {
            this.model.cardList.addCard(card.serialNumber, card.builder);
            this.view.snackbar('The list was saved');
        } else {
            this.view.snackbar('The list already exists');
        }
    }

    deleteCard(sn) {
        this.model.cardList.deleteCard(sn);
        this.view.snackbar('The list was deleted');
    }


}


