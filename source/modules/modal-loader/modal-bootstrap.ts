import {Component} from 'angular2/core';
import {ModalInstance} from './modal-instance';

@Component({
    selector: 'bootstrap-modal',
    host: {
        'tabindex': '0',
        'role': 'dialog',
        'class': 'in modal',
        'style': 'display: block',
        '[style.position]': 'position',
        '(click)': 'onClick()'
    },
    template: `
        <div class="modal-dialog">
             <div class="modal-content" (click)="onContainerClick($event)" style="display: block">
                <div style="display: none" #modalDialog></div>
             </div>
        </div>`
})

export class BootstrapModalContainer {
    modalInstance: ModalInstance;
    public position: string;

    constructor(modalInstance: ModalInstance) {
        this.modalInstance = modalInstance;
        this.position = 'absolute';
    }

    onClick() {
        return this.modalInstance.dismiss();
    }

    onContainerClick() {
        
    }
}