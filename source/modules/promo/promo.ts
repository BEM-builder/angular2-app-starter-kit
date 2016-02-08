import {Component} from 'angular2/core';
import {Data} from './../../data/data';

import {provide, ElementRef, Injector, IterableDiffers, KeyValueDiffers, Renderer} from 'angular2/core';
import {Modal} from './../modal-loader/modal';
import {ModalInstance} from './../modal-loader/modal-instance';
import {ICustomModal} from './../modal-loader/iCustomModal';

@Component({
    selector: 'promo',
    providers: [Modal],
    template: require('./promo.html'),
    styles: [ require('./promo.scss').toString() ]
})

export class Promo {
    private data: any = new Data().getData();
    constructor(private modal: Modal, private elementRef: ElementRef,
                private injector: Injector, private _renderer: Renderer) {

    }

    openDialog() {
        let dialog: Promise<ModalInstance>;
        let component = require('./../modal__default/modal__default').ModalDefault;
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