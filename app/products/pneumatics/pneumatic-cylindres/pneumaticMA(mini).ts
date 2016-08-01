
import {Component , OnInit} from "@angular/core";

@Component({
    selector: 'pneumaticMA-component',
    templateUrl: "app/html/products/pneumatics/pneumatic-cylindres/pneumaticMA.component.html",
})

export class PneumaticMAComponent implements OnInit{

    public list: string[];

    public ngOnInit():void{

        this.list = [

            "давление 1,35 МПа",
            "рабочее давление от 0,1 до 0,9 МПа",
            "температура от -5 до 70 0С",
            "присоединительные размеры М5х0.8, G1/8"

        ];

    }
}

