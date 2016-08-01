/**
 * Created by dima- on 01.08.2016.
 */

import {Component , OnInit} from "@angular/core";

@Component({
    selector: 'cylindersSChousingHeels-component',
    templateUrl: "app/html/products/pneumatics/pneumatic-cylindres/cylindersSChousingHeels.component.html",
})

export class CylindersSChousingHeelsComponent implements OnInit{

    public list: string[];

    public ngOnInit():void{

        this.list = [

            "D 125, 160, 200 мм",
            "d 32, 40 45 мм",
            "рабочая среда: воздух",
            "давление 1,35 МПа",
            "рабочее давление от 0,1 до 0,9 МПа",
            "температура от -5 до 70 0С",
            "скорость 300-800 мм/с",
            "присоединительные размеры G1/2' (125), G3/4' (160, 200)",

        ];

    }
}

