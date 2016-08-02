import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'KNS-component',
    templateUrl: 'app/html/products/polypropylene-products/KNS.component.html',
})

export class KNSComponent implements OnInit{

    public advantages: string[];

    public ngOnInit(){
        this.advantages = [
            "минимальные размеры, высокая эффективность очистки",
            "возможна установка непосредственно под ручную мойку посуды или рядом",
            "минимальные расходы на установку и монтаж",
            "длительный срок эксплуатации жироулавливателя",
            "изготовление по габаритам заказчика",
            "экономия денежных средств в ходе эксплуатации канализации"
        ];
    };
}



