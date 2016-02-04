import {Component, Input} from 'angular2/core';

@Component({
    selector: 'news-item',
    template: require('./news-item.html'),
    styles: [ require('./news-item.scss').toString()],
})

export class NewsItem {
    @Input() modificator : string;
    @Input() imgClass : string;
    @Input() title : string;
    @Input() text : string;
    @Input() url : string;

    constructor() {

    }
}