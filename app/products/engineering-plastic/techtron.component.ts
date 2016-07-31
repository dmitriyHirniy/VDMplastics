import {Component, OnInit} from "@angular/core";

class TableRow{
    constructor(
        public proper: string,
        public unit: string,
        public hpv: string
    ){};
}

@Component({
    selector: 'techtron-component',
    templateUrl: 'app/html/products/engineering-plastic/techtron.component.html'
})

export class TechtronComponent implements OnInit{
    public table: TableRow[];
    public ngOnInit(){
        this.table = [
            new TableRow("Плотность","г/см3","	1,43"),
            new TableRow("Водопоглощение : за 24 часа, максимальное	","%	","0,01 0,09"),
            new TableRow("Температура плавления","	°С","	280"),
            new TableRow("К-т теплопроводности при 23° С","	Вт/Кхм","	0,30"),
            new TableRow("К-т линейного расширения при температурах 23-60 °С","	м/м*К	","5 х 10-5"),
            new TableRow("Температура начала изгиба под нагрузкой 1,8 МПа	","° С","	115"),
            new TableRow("Диапазон рабочих температур","	°С	","+220"),
            new TableRow("Предел прочности при растяжении	","МПа","	75"),
            new TableRow("Напряжение при сжатии (2% деформация)	","МПа","	55"),
            new TableRow("Относительное удлинение при разрыве	","%","	5"),
            new TableRow("Модуль упругости	","МПа	","3700"),
            new TableRow("Ударная вязкость по Шарпи - без надреза - с надрезом	","кДж/м2","	25 3,5"),
            new TableRow("Твердость по Бринелю	","МПа	","165"),
            new TableRow("Диэлектрическая проницаемость при 106 Гц	","-","	3,3"),
            new TableRow("Тангенс угла диэлектрических потерь при 106 Гц	","-","	0,003")
        ];
    }
}
/**
 * Created by dima- on 27.07.2016.
 */

