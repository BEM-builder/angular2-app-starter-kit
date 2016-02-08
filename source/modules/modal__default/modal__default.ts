import {Component} from 'angular2/core';

import {ICustomModal, ICustomModalComponent} from './../modal-loader/iCustomModal';
import {ModalInstance} from "../modal-loader/modal-instance";

@Component({
    selector: 'modal-default',
    template: require('./modal__default.html'),
    styles: [ require('./modal__default.scss').toString() ]
})

export class ModalDefault implements ICustomModalComponent {
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