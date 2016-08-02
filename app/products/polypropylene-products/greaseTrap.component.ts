import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'greaseTrap-component',
    templateUrl: 'app/html/products/polypropylene-products/greaseTrap.component.html',
})

export class GreaseTrapComponent implements OnInit{

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


