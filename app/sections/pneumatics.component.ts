import {Component , OnInit} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router'
class Section{
    constructor(
        public from: number,
        public to: number
    ){};
}
@Component({
    selector: 'pneumatics-component',
    templateUrl: "app/html/sections/pneumatics.component.html",
    directives: [ROUTER_DIRECTIVES]
})

export class PneumaticsComponent implements OnInit{


    public ngOnInit():void{

    }
}
