import Card from '../utils/cardClass.js';
export default class View {
    constructor(controller) {
        const self = this;
        const showAllListsButton = document.getElementById('showAllListsButton');
        const listDialogForm = document.getElementById('listDialogForm');
        const addListButton = document.getElementById('addListButton');
        const listDialog = document.getElementById('listDialog');
        const cancelButton = document.getElementById('cancelButton');
        const searchResult = document.getElementById('searchResult');
        const hiddenNameField = document.getElementById('hiddenNameField');
        const confirmDialog = document.getElementById('confirmDialog');
        const confrimDialogForm = document.getElementById('confirmDialogForm');
        const cancelConfirmBtn = document.getElementById('cancelConfirmBtn');


        self.controller = controller;


        showAllListsButton.onclick = function () {
            self.controller.showAllCards();
        }


        
       

        addListButton.onclick = function () {
            listDialogForm.reset ();
            listDialog.showModal ();
        }

        cancelButton.onclick = function() {
            listDialog.close ();
        }

        listDialogForm.onsubmit = function() {
            self.controller.newCard ({
                listName : document.getElementById('namefield').value,
                listType : document.getElementById('typefield').value,
            })
        }

        searchResult.onclick = function (e) {
            if (e.target.nodeName === 'BUTTON') {
            hiddenNameField.value = e.target.id;
            confirmDialog.showModal();
            }
        }

    
        cancelConfirmBtn.onclick = function () {
            confirmDialog.close();
        }

        confrimDialogForm.onsubmit = function () {
            self.controller.deleteCard(hiddenNameField.value);
            self.controller.showAllCards();
        }

    }

    message(template) {
        const element = document.getElementById ('searchResult')
        element.innerHTML = '';
        element.insertAdjacentHTML('beforeend', template);
    }

    snackbar(snackmessage) {
        const snackbar = document.getElementById('snackbar');
        snackbar.innerHTML = snackmessage;
        snackbar.className = 'show'
        setTimeout (function () {
            snackbar.className = snackbar.className.replace('show','');
        }, 3000);
    }
}

