import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

class Product{
    constructor(
        public photo: string,
        public title: string,
        public desc: string[],
        public pageLink: string
    ){};
}

@Component({
    selector: 'pneumatic-cylinders-component',
    templateUrl: 'app/html/products/pneumatics/pneumatic-cylinders.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class PneumaticCylindersComponent implements OnInit{

    public products: Product[];
    
    public ngOnInit(){
 
        this.products = [
            new Product(
                "http://aplast.com.ua/images/pneomo/1.1.jpg", 
                "Пневмоцилиндры DNC (стандартные)",
                [
                    "Диаметр 32, 40, 50, 63, 80, 100, 125",
                    "Диаметр штока 12, 16, 20, 25, 32 мм",
                    "Длина хода 1...2000 мм"
                ],
                "PneumaticCylindersDNCseries"),
            new Product(
                "http://aplast.com.ua/images/pneomo/1.2.jpg",
                "Пневмоцилиндры ADVU (компактные)",
                [
                    "Диаметр 16, 20, 25, 32, 40, 50, 63, 80",
                    "Диаметр штока 8, 10, 12, 16, 20 мм",
                    "Длина хода 1-400 мм"
                ],
                "CylindersSeriesADVU"),
            new Product(
                "http://aplast.com.ua/images/pneomo/1_4.1.jpg",
                "Пневмоцилиндры SC (корпус на шпильках)",
                [
                    "Диаметр 125, 160, 200 мм",
                    "Диаметр штока 32, 40, 45 мм",
                    "Длина хода 1...2000 мм"
                ],
                "PneumaticMA"),
            new Product(
                "http://aplast.com.ua/images/pneomo/1.3.jpg",
                "Пневмоцилиндры MA (mini)",
                [
                    "Диаметр 16, 20, 25 мм",
                    "Диаметр штока 6, 8, 10, 12, 16, 20 мм",
                    "Длина хода 1-500 мм"
                ],
                "CylindersSChousingHeels")
        ];
        
    }
}


