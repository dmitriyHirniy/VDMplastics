import {Component , OnInit} from "@angular/core";

@Component({
    selector: 'pneumaticCylindersDNCseries-component',
    templateUrl: "app/html/products/pneumatics/pneumatic-cylindres/pneumaticCylindersDNCseries.component.html",
})

export class PneumaticCylindersDNCseriesComponent implements OnInit{

    public list: string[];

    public ngOnInit():void{

        this.list = [
            "D 32, 40, 50, 63, 80, 100, 125 мм",
            "d 12, 16, 20 ,25 ,32 мм",
            "рабочая среда: подготовленный воздух",
            "давление 1,5 МПа",
            "рабочее давление от 0,1 до 1,0 МПа",
            "температура от -5 до 70 0С",
            "скорость 50-800 мм/с",
            'присоединительные размеры G1/8"(32), G1/4"(40, 50), G3/8"(63, 80), G1/2" (100, 125)'
        ];

    }
}

