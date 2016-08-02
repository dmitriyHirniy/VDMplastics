import {Component, OnInit} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router'
class Row{
    constructor(
        public _1: string,
        public _2: string
    ){}
}

class Product{
    constructor(
        public title: string,
        public price: string,
        public description: string,
        public pageLink: string,
        public photo: string
    ){};
}

@Component({
    selector: 'polypropylene-component',
    templateUrl: 'app/html/sections/polypropylene-products.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class PolypropyleneProductsComponent implements OnInit{


    public products: Product[];

    public ngOnInit(){

        this.products = [
            new Product(
                "Басейны",
                "Уточнайте",
                "Листовой полипропилен — экологически чистый, прочный и устойчивый к ультрафиолетовому излучению пластик",
                "Pool",
                "http://aplast.com.ua/images/bas/4.jpg"
            ),
            new Product(
                "Гальванические ванны и емкости",
                "Уточнайте",
                "Листовой полипропилен — экологически чистый, прочный и устойчивый к ультрафиолетовому излучению пластик",
                "GalvanicBaths",
                "http://aplast.com.ua/images/9.jpg"
            ),
            new Product(
                "Жироуловители из полипропилена",
                "Уточнайте",
                "Листовой полипропилен — экологически чистый, прочный и устойчивый к ультрафиолетовому излучению пластик",
                "GreaseTrap",
                "http://aplast.com.ua/images/bas/4.jpg"
            ),
            new Product(
                "КНС",
                "Уточнайте",
                "Листовой полипропилен — экологически чистый, прочный и устойчивый к ультрафиолетовому излучению пластик",
                "KNS",
                "http://aplast.com.ua/images/Nasos.png"
            )
        ];

    }
}
