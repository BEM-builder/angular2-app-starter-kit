import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'

@Component({
    selector: 'secondpage',
    template:
        `
            <div class="container">
                <div class="form first">
                    <h1>First form</h1>
                    <form (ngSubmit)="onFirstFormSubmit()" #firstForm="ngForm">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" required
                                [(ngModel)]="model.name"
                                ngControl="name"
                                #name="ngForm">
                            <div [hidden]="name.valid" class="alert alert-danger">Name is required</div>
                        </div>

                        <div class="form-group">
                            <label for="surname">Surname</label>
                            <input type="text" class="form-control"
                                [(ngModel)]="model.surname"
                                ngControl="surname"
                                #surname="ngForm">
                        </div>

                        <button type="submit" class="btn btn-default" [disabled]="!firstForm.form.valid">Submit</button>
                    </form>
                </div>

                <div class="form second">
                    <h1>Second form</h1>
                    <form (submit)="onSecondFormSubmit()" #selectables="ngForm">
                        <div class="form-group">
                            <label for="selectable">Selectables</label>
                            <select id="selectable" class="form-control" required>
                                <option *ngFor="#s of selectable" [value]="s">{{s}}</option>
                            </select>
                        </div>

                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
            <div id="log">
                <b>First form submits counter:</b> {{firstFormSubmitCounter}}<br/>
                <b>Submitted from second form:</b> {{secondFormData}}<br/>
                <b>Model:</b> {{getModel()}}<br/>
                <b>Selectables:</b> {{getSelectables()}}
            </div>
        `
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
        var selectable : any = document.getElementById('selectable');
        this.secondFormData = selectable[selectable.selectedIndex].text;
    }

    getModel() {
        return JSON.stringify(this.model);
    }

    getSelectables() {
        return this.selectable.toString();
    }
}