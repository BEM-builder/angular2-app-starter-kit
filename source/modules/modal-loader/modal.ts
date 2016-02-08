import {
    Injectable,
    DynamicComponentLoader,
    ComponentRef,
    ElementRef,
    Optional,
    provide,
    Injector,
    ResolvedProvider,
    ApplicationRef,
    APP_COMPONENT
} from 'angular2/core';

import {ModalInstance} from './modal-instance';
import {ModalBackdrop} from './modal-backdrop';
import {BootstrapModalContainer} from './modal-bootstrap';

@Injectable()
export class Modal {
    constructor(private componentLoader: DynamicComponentLoader, private appRef: ApplicationRef) {

    }

    public open(componentType: FunctionConstructor, bindings: ResolvedProvider[]) : Promise<ModalInstance> {
        //Should be appRef.injector.get(APP_COMPONENT), but it doesn't work. Using hack below.
        let elementRef: ElementRef = this.appRef['_rootComponents'][0].location;

        return this.openInside(componentType, elementRef, null, bindings);
    }

    public openInside(componentType: FunctionConstructor, elementRef: ElementRef,
                      anchorName: string, bindings: ResolvedProvider[]
                      ): Promise<ModalInstance> {
        let dialog = new ModalInstance();
        let modalBindings = Injector.resolve([ provide(ModalInstance, {useValue: dialog}) ]);

        return this.createBackdrop(elementRef, modalBindings, anchorName)
            .then( (backdropRef: ComponentRef) => {
                dialog.backdropRef = backdropRef;

                let modalDataBindings = Injector.resolve(
                    [provide(ModalInstance, {useValue: dialog})]).concat(bindings);

                return this.componentLoader.loadIntoLocation(
                    BootstrapModalContainer, backdropRef.location, 'modalBackdrop', modalBindings)
                    .then( (bootstrapRef) => {
                        dialog.bootstrapRef = bootstrapRef;

                        return this.componentLoader.loadIntoLocation(
                            componentType, bootstrapRef.location, 'modalDialog', modalDataBindings)
                            .then( (contentRef) => {
                                dialog.contentRef = contentRef;
                                return dialog;
                            });
                    });

            });
    }

    private createBackdrop(elementRef: ElementRef, bindings: ResolvedProvider[],
                           anchorName: string): Promise <ComponentRef> {
        return this.componentLoader.loadNextToLocation(ModalBackdrop, elementRef, bindings);
    }
}