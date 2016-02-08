import {Component, Input} from 'angular2/core';
import {Router, RouteConfig, RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'form',
    template: require('./form.html'),
    styles: [ require('./form.scss').toString()]
})

export class Form {
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
