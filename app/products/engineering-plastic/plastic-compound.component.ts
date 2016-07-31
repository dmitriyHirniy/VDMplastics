import {Component, OnInit} from "@angular/core";

class Row{
    constructor(
        public proper: string,
        public unit: string,
        public pei: string,
        public psu: string
    ){}
}

class Table{
    constructor(
        public theadTitle: string[],
        public tbodyData: Row[]
    ){};
}

@Component({
    selector: 'plastic-compound-component',
    templateUrl: 'app/html/products/engineering-plastic/plastic-compound.component.html'
})

export class PlasticCompoundComponent implements OnInit{

    public properties: Table;

    public ngOnInit(){
        
    }
}


