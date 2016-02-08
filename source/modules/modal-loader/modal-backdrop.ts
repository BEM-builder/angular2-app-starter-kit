import {Component} from 'angular2/core';

@Component({
    selector: 'modal-backdrop',
    host: {
        '[style.position]': 'position',
        '[style.height]': 'height',
        '[style.width]': 'width',
        '[style.top]': 'top',
        '[style.left]': 'left',
        '[style.right]': 'right',
        '[style.bottom]': 'bottom'
    },
    template: '<div [style.position]="position" class="in modal-backdrop" #modalBackdrop></div>'
})

export class ModalBackdrop {
    public position: string;
    public height: string;
    public width: string;
    public top: string;
    public left: string;
    public right: string;
    public bottom: string;

    constructor() {
        this.position = 'absolute';
        this.height = '100%';
        this.width = '100%';
        this.top = this.left = this.right = this.bottom = '0';
    }
}