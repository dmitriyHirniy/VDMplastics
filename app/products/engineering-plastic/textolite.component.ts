import {Component, OnInit} from "@angular/core";

class Row{
    constructor(
        public title: string,
        public price: string,
        public weight: string
    ){}
}

@Component({
    selector: 'textolite-component',
    templateUrl: 'app/html/products/engineering-plastic/textolite.component.html'
})

export class TextoliteComponent implements OnInit{

    public product: Row[];

    public ngOnInit(){
        this.product = [
            new Row("Текстолит 3х1020х2040","557,28","	8,64"),
            new Row("Текстолит 4х1020х2040","752,07","11,66"),
            new Row("Текстолит 5х1020х2040	","965,58	","14,97"),
            new Row("Текстолит 6х1020х2040	","1169,38	","18,13"),
            new Row("Текстолит 8х1020х2040	","1557,66	","24,15"),
            new Row("Текстолит т10х1020х2040	","1954,35","	30,30"),
            new Row("Текстолит т15х1020х2040	","2881,20","	44,67"),
            new Row("Текстолит т20х1020х2040	","3934,50","	61,00"),
            new Row("Текстолит т30х1020х2040	","5966,25	","92,50"),
            new Row("Текстолит т40х1020х2040	","8110,87	","125,75"),
            new Row("Текстолит т50х1020х2040	 ","10062,00	","156,00"),
            new Row("Текстолит т60х1020х2040	","12771,00	","198,00")
        ];
    }
}


