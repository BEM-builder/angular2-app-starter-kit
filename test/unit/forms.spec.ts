import 'reflect-metadata';
import {SecondPageComponent} from '../../source/components/secondpage/secondpage.component';

describe('forms unit testing', () => {
    var component = new SecondPageComponent();

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