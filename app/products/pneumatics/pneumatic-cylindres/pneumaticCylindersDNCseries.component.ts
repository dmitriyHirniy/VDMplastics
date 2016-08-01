import {Component , OnInit} from "@angular/core";

class Section{
    constructor(
        public from: number,
        public to: number
    ){};
}
@Component({
    selector: 'pneumaticCylindersDNCseries-component',
    templateUrl: "app/html/products/pneumatics/pneumatic-cylindres/pneumaticCylindersDNCseries.component.html",
})

export class PneumaticCylindersDNCseriesComponent implements OnInit{


    public ngOnInit():void{

    }
}

