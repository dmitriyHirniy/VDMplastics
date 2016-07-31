import {Component, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {EngineeringPlasticService} from "../services/engineering-plastic.service";
@Component({
    selector: 'engineering-plastic-component',
    templateUrl: 'app/html/sections/engineering-plastic.component.html'
})

export class EngineeringPlasticComponent implements OnInit{

    public products: string[];
    public products_error:Boolean = false;

    constructor(private _service: EngineeringPlasticService) {}

    public ngOnInit(){

      this._service.getProducts().subscribe(
          data => { this.products = data},
          err => { this.products_error = true }
      );

    };
}
