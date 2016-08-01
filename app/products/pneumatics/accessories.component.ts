

import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

class Product{
    constructor(
        public photo: string,
        public title: string,
        public desc: string,
        public pageLink: string
    ){};
}

@Component({
    selector: 'accessories-component',
    templateUrl: "app/html/products/pneumatics/accessories.component.html",
    directives: [ROUTER_DIRECTIVES]
})

export class AccessoriesComponent implements OnInit{

    public products: Product[];

    public ngOnInit(){

        this.products = [
            new Product(
                "http://aplast.com.ua/images/pneomo/1.7.jpg",
                "Элементы крепления",
                "В наличии на складе стандартные элементы для пневмоцилиндров и штоков, которые используются при монтаже исполнительных механизмов...",
                "Fasteners"
            ),
            new Product(
                "http://aplast.com.ua/images/pneomo/1.8.jpg",
                "Фитинги, глушители и трубки",
                "Фитинги являются соединяющим звеном пневмолинии и пневмоаппаратуры. Глушители предназначены для для...",
                "SilencersTubes"
            )
        ];

    }
}


