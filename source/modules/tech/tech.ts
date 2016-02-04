import {Component} from 'angular2/core';
import {NewsItem} from './../news-item/news-item';
import {Data} from './../../data/data';

@Component({
    selector: 'tech',
    template: require('./tech.html'),
    styles: [ require('./tech.scss').toString() ],
    directives: [NewsItem]
})

export class Tech {
    private data: any = new Data().getData();
    constructor() {

    }
}