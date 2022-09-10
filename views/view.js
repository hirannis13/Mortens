import Guitar from '../utils/guitarClass.js';
export default class View {
    constructor(controller) {
        const self = this;
        const showAllGuitarsButton = document.getElementById('showAllGuitarsButton');
        const guitarDialogForm = document.getElementById('guitarDialogForm');
        const addGuitarButton = document.getElementById('addGuitarButton');
        const guitarDialog = document.getElementById('guitarDialog');
        const cancelButton = document.getElementById('cancelButton');
        const searchResult = document.getElementById('searchResult');
        const hiddenSnField = document.getElementById('hiddenSnField');
        const confirmDialog = document.getElementById('confirmDialog');
        const confrimDialogForm = document.getElementById('confirmDialogForm');
        const cancelConfirmBtn = document.getElementById('cancelConfirmBtn');


        self.controller = controller;


        showAllGuitarsButton.onclick = function () {
            self.controller.showAllGuitars();
        }


        
       

        addGuitarButton.onclick = function () {
            guitarDialogForm.reset ();
            guitarDialog.showModal ();
        }

        cancelButton.onclick = function() {
            guitarDialog.close ();
        }

        guitarDialogForm.onsubmit = function() {
            self.controller.newGuitar ({
                serialNumber : document.getElementById('snfield').value,
                builder : document.getElementById('builderfield').value,
            })
        }

        searchResult.onclick = function (e) {
            if (e.target.nodeName === 'BUTTON')
            hiddenSnField.value = e.target.id;
            confirmDialog.showModal();
        }

        cancelConfirmBtn.onclick = function () {
            confirmDialog.close();
        }

        confrimDialogForm.onsubmit = function () {
            self.controller.deleteGuitar(hiddenSnField.value);
            self.controller.showAllGuitars();
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

