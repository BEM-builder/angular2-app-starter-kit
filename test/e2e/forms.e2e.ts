import {FormsPageObject} from './pageObjects/forms.pageObject'
import 'reflect-metadata'
import {SecondPageComponent} from '../../source/app/pages/secondpage/secondpage.component';

describe('Forms page', function () {
    var formsObject = new FormsPageObject();

    beforeEach(function () {
        browser.get('#/secondpage');
    });

    it('should make sure that first form is present', () => {
        expect(formsObject.firstForm.isPresent()).toBeTruthy();
        expect(formsObject.alert.isPresent()).toBeTruthy();
        expect(formsObject.controls.name.isPresent()).toBeTruthy();
        expect(formsObject.controls.selectable.isPresent()).toBeTruthy();
        expect(formsObject.controls.surname.isPresent()).toBeTruthy();
    });

    it('should make sure that second form and log field elements are present', () => {
        expect(formsObject.secondForm.isPresent()).toBeTruthy();
        expect(formsObject.selectable.get(0).getText()).toBe('firstItem');
        expect(formsObject.selectable.count()).toBe(3);
    });

    describe('First form tests', () => {
        it('should check all initial values', () => {
            formsObject.controls.name.getAttribute('value').then((data) => {
                expect(data).toEqual('Somename');
            });

            formsObject.controls.surname.getAttribute('value').then((data) => {
                expect(data).toEqual('Somesurname');
            });

            expect(formsObject.controls.firstSubmitButton.isEnabled()).toBeTruthy();
            expect(formsObject.alert.isDisplayed()).toBeFalsy();
        });

        it('should test validation in name field', () => {
            formsObject.controls.name.clear();
            formsObject.controls.name.sendKeys(' ');
            formsObject.controls.name.sendKeys(protractor.Key.BACK_SPACE);
            formsObject.controls.name.getAttribute('value').then((data) => {
                expect(data).toEqual('');
                expect(formsObject.alert.isPresent()).toBeTruthy();
                expect(formsObject.alert.isDisplayed()).toBeTruthy();
                expect(formsObject.controls.firstSubmitButton.isEnabled()).toBeFalsy();
            });
        });

        it('should check submit function', () => {
            formsObject.log.getText().then((text) => {
                expect(text.indexOf('counter: 0') > -1).toBeTruthy();
            });
            formsObject.controls.firstSubmitButton.click();
            formsObject.log.getText().then((text) => {
                expect(text.indexOf('counter: 1') > -1).toBeTruthy();
            });
        })
    });

    describe('second form tests', () => {
        it('should check submit && validation', () => {
            formsObject.log.getText().then((text) => {
                expect(text.indexOf('form: '))
            });
            element(by.cssContainingText('option', 'secondItem')).click();
            formsObject.controls.secondSubmitButton.click();
            formsObject.log.getText().then((text) => {
                expect(text.indexOf('form: secondItem'))
            });
        });
    })
});