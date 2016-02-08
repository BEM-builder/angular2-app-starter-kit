import 'reflect-metadata';
import {Form} from '../../source/modules/form/form';

describe('forms unit testing', () => {
    var component = new Form();

    beforeEach(() => {
        //browser.get('#/secondpage');
    });

    it('should test forms class initialization', () => {
        expect(component.getSecondFormData()).toBe('');
        expect(component.getModel()).toBe('{"name":"Somename","surname":"Somesurname"}');
        expect(component.getSelectables()).toBe('firstItem,secondItem,thirdItem');
    });

    it('should test form class methods', () => {
        expect(component.getFirstFormSubmitCounter()).toBe(0);
        component.onFirstFormSubmit();
        expect(component.getFirstFormSubmitCounter()).toBe(1);
    })
});