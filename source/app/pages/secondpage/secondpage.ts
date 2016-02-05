import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';

@Component({
    selector: 'secondpage',
    template: require('./secondpage.html'),
})

export class SecondPageComponent {

    private firstFormSubmitCounter : number = 0;
    private secondFormData : string = '';
    private model : Object = {
        name : 'Somename',
        surname : 'Somesurname'
    };
    private selectable : Array<string> = [
        'firstItem', 'secondItem', 'thirdItem'
    ];

    constructor() {

    }

    getFirstFormSubmitCounter() {
        return this.firstFormSubmitCounter;
    }

    onFirstFormSubmit() {
        this.firstFormSubmitCounter++;
    }

    getSecondFormData() {
        return this.secondFormData;
    }

    onSecondFormSubmit() {
        let selectable : any = document.getElementById('selectable');
        this.secondFormData = selectable[selectable.selectedIndex].text;
    }

    getModel() {
        return JSON.stringify(this.model);
    }

    getSelectables() {
        return this.selectable.toString();
    }
}