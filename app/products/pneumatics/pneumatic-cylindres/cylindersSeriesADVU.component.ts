import {Component , OnInit} from "@angular/core";

@Component({
    selector: 'cylindersSeriesADVU-component',
    templateUrl: "app/html/products/pneumatics/pneumatic-cylindres/cylindersSeriesADVU.component.html",
})

export class CylindersSeriesADVUComponent implements OnInit{

    public list: string[];

    public ngOnInit():void{

        this.list = [

            "D 16, 20, 25, 32, 40, 50, 63, 80 мм",
            "d 8, 10, 12, 16, 20 мм",
            "давление 1,5 МПа",
            "рабочее давление от 0,1 до 1,0 МПа",
            "температура от -20 до 80 0С"
            
        ];

    }
}

