import {Injectable, ComponentRef} from 'angular2/core';


export class ModalInstance {
    contentRef: ComponentRef;
    private _bootstrapRef: ComponentRef;
    private _backdropRef: ComponentRef;

    constructor() {

    }

    set backdropRef (ref: ComponentRef) {
        this._backdropRef = ref;
    }

    set bootstrapRef (ref: ComponentRef) {
        this._bootstrapRef = ref;
    }

    close(result: any = null) {
        if ( this.contentRef.instance.beforeClose &&
                this.contentRef.instance.beforeClose() === true ) {
            return;
        }
        this.dispose();
    }

    dismiss() {
        if ( this.contentRef.instance.beforeDismiss &&
                this.contentRef.instance.beforeDismiss() === true ) {
            return;
        }
        this.dispose();
    }

    private dispose() {
        this._bootstrapRef.dispose();
        this._backdropRef.dispose();
        this.contentRef.dispose();
    }
}