import {Component, OnInit} from "@angular/core";

class TableRow{
    constructor(
        public row1: string,
        public row2: string
    ){};
}

@Component({
    selector: 'vinyl-component',
    templateUrl: 'app/html/products/engineering-plastic/vinyl.component.html'
})

export class VinylComponent implements OnInit{
    public table: TableRow[];
    public ngOnInit(){
        this.table = [
            new TableRow("Прочность при растяжении, МПа, не менее","50,0"),
            new TableRow("Относительное удлинение при разрыве, %, не менее","10"),
            new TableRow("Температура размягчения по ВИКа, °С, не ниже","85"),
            new TableRow("Изменение размеров при прогреве, %, не более","5")
        ];
    }
}


