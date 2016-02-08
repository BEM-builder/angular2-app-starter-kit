import {Component} from 'angular2/core';
import {Login} from './../login/login';

import {ICustomModal, ICustomModalComponent} from './../modal-loader/iCustomModal';
import {ModalInstance} from "../modal-loader/modal-instance";

@Component({
    selector: 'modal-login',
    template: require('./modal__login.html'),
    styles: [ require('./modal__login.scss').toString() ],
    directives: [Login]
})

export class ModalLogin implements ICustomModalComponent {
    dialog: ModalInstance;

    constructor(dialog: ModalInstance) {
        this.dialog = dialog;
    }

    beforeDismiss(): boolean {
        return true;
    }

    beforeClose(): boolean {
        return false;
    }

    onClose() {
        this.dialog.close();
    }
}