import {ModalInstance} from './../modal-loader/modal-instance';

/**
 * A Type used as a binding key for dialog window Components
 */
export class ICustomModal {}

export interface ICustomModalComponent {
    dialog: ModalInstance;

    /**
     * Invoked before a modal__login is dismissed, return true to cancel dismissal.
     */
    beforeDismiss?(): boolean;

    /**
     * Invoked before a modal__login is closed, return true to cancel closing.
     */
    beforeClose?(): boolean;
}
