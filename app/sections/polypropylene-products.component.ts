import {Component, OnInit} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router'
class Row{
    constructor(
        public _1: string,
        public _2: string
    ){}
}

class TableRow{
    constructor(
        public title: string,
        public price: string,
        public weight: string
    ){};
}

@Component({
    selector: 'polypropylene-component',
    templateUrl: 'app/html/sections/polypropylene-products.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class PolypropyleneProductsComponent implements OnInit{


    public ngOnInit(){

    }
}
/**
 * Created by dima- on 31.07.2016.
 */
