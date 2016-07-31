import {Component, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {EngineeringPlasticService} from "../services/engineering-plastic.service";
import {Product} from "../models/engineering-plastic.model";
import {ROUTER_DIRECTIVES} from "@angular/router";

class Section{
    constructor(
        public from: number,
        public to: number
    ){};
}

@Component({
    selector: 'engineering-plastic-component',
    templateUrl: 'app/html/sections/engineering-plastic.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class EngineeringPlasticComponent implements OnInit{

    public products: Product[];
    public products_error:Boolean = false;

    public _products: Product[][];
    public rows: Section[];

    constructor(private _service: EngineeringPlasticService) {}

    public ngOnInit(){

      this._service.getProducts().subscribe(
          data => { this.products = data},
          err => { this.products_error = true }
      );
        
       /* this.rows = new Array<Section>();

        let initLength:number = this.products.length;
        let remainder:number = initLength%3;
        let rows: number = Math.floor(initLength/3);

        for(var i=0;i<rows;i++){
            let _section: Section = new Section(i*3, (i+1)*3);
            this.rows[i] = _section;
        }
        if(remainder !=0){
            let _section: Section = new Section(rows*3 , rows*3 + remainder);
            this.rows[rows] = _section;
        }

        let index = 0;
        for(var i=0;i<rows;i++){
            this._products = new Array<Product[]>(rows);
            for(var j=0;j<3;j++) {
                this._products[i] = new Array<Product>(3);
                this._products[i][j] = this.products[index++];
            }
        }
        */

    };

    public toggleIcon(){
        let _class:string = document.getElementById('accordion-icon').getAttribute('class');
        if(_class == "glyphicon glyphicon-arrow-down") document.getElementById('accordion-icon').setAttribute('class' , 'glyphicon glyphicon-arrow-up');
        else document.getElementById('accordion-icon').setAttribute('class' , 'glyphicon glyphicon-arrow-down');
    };
}
