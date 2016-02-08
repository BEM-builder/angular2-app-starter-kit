import {Component, Input} from 'angular2/core';
import {Menu} from './../menu/menu';

import {provide, ElementRef, Injector, IterableDiffers, KeyValueDiffers, Renderer} from 'angular2/core';
import {Modal} from './../modal-loader/modal';
import {ModalInstance} from './../modal-loader/modal-instance';
import {ICustomModal} from './../modal-loader/iCustomModal';

@Component({
    selector: 'header',
    providers: [Modal],
    template: require('./header.html'),
    styles: [ require('./header.scss').toString() ],
    directives: [Menu]
})

export class Header {
    constructor(private modal: Modal, private elementRef: ElementRef,
                private injector: Injector, private _renderer: Renderer) {

    }

    openDialog() {
        let dialog: Promise<ModalInstance>;
        let component = require('./../modal__login/modal__login').ModalLogin;
        let bindings = Injector.resolve([
            provide(IterableDiffers, {useValue: this.injector.get(IterableDiffers)}),
            provide(KeyValueDiffers, {useValue: this.injector.get(KeyValueDiffers)}),
            provide(Renderer, {useValue: this._renderer})
        ]);

        dialog = this.modal.open(
            <any>component,
            bindings
        );
    }
}