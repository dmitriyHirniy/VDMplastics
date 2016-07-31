import {Component, OnInit} from "@angular/core";

class TableRow{
    constructor(
        public marka: string,
        public row1: string,
        public row2: string,
        public row3: string,
        public row4: string,
        public row5: string,
        public row6: string,
        public row7: string,
        public row8: string,
        public row9: string
    ){};
}

@Component({
    selector: 'mica-component',
    templateUrl: 'app/html/products/engineering-plastic/mica.component.html'
})

export class MicaComponent implements OnInit{
    public table: TableRow[];
    public titles: string[];
    public ngOnInit(){
        this.titles = [
            "Марка","0,15-0,25","0,3","0,35","	0,4	","0,45","	0,5","	0,6	","0,7-1,0","	1,5"
        ];
        this.table = [
            new TableRow("ПФГ ","34	","21","21","21	","-","21","18","16","-"),
            new TableRow("ПМГ","34","21","21","21","-","21","18","16","-"),
            new TableRow("ПФК	","34","	21","21","21","-","21","18","16","-"),
            new TableRow("ФМГ	","41","	36","36","36","36","36","30","30","30"),
            new TableRow("ФМП	","41","	36","36","36","36","36","	30","	30","	30"),
            new TableRow("ФМК	","41","	36","36","36","	36","	36	","30	","30	","30"),
            new TableRow("ФФК	","36","	31","31","31","	31	","31	","25	","25	","25"),
            new TableRow("ФФГ	","36","	31","31","31","	31	","31	","25	","25	","25"),
            new TableRow("ФФГ-А	","36","	31","31","31","	31	","31","	25	","25	","25"),
            new TableRow("ФФП	","36","	31","31","31","	31","	31","	25	","25	","25"),
            new TableRow("ГФС	","24","	23","23","23","	23","	23	","-	","-","	-"),
            new TableRow("ГМС	","28","	24","24","24","	24","	24","	-","-	","-"),
            new TableRow("ГФК	","24","	22","22","22","	22	","22	","-","	-","-"),
        ];
    }
}




