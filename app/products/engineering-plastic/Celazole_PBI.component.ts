import {Component, OnInit} from "@angular/core";

class Row{
    constructor(
        public properties: string,
        public unit: string,
        public value
    ){}
}

@Component({
    selector: 'Celazole-component',
    templateUrl: 'app/html/products/engineering-plastic/Celazole_PBI.component.html'
})

export class Celazole_PBIComponent implements OnInit{
    public table:Row[];
    constructor(){}

    public ngOnInit(){
        this.table = [
            new Row("Плотность", "г/см3","1,30"),
            new Row("Водопоглощение : за 24 часа, максимальное","%","	0,5 14"),
            new Row("Температура плавления", "°С", "-"),
            new Row("К-т теплопроводности при 23° С", "	Вт/Кхм", "0,19"),
            new Row("К-т линейного расширения при температурах 23-60 °С", "	м/м*К", "2,5х10-5"),
            new Row("Температура начала изгиба под нагрузкой 1,8 МПа","° С", 	"425"),
            new Row("Максимальная допустимая рабочая температура: короткая постоянно","°С","+500 +345"),
            new Row("Предел прочности при растяжении","МПа","160"),
            new Row("Напряжение при сжатии (2% деформация)","МПа","82"),
            new Row("Относительное удлинение при разрыве","%","3"),
            new Row("Модуль упругости","МПа","5800"),
            new Row("Ударная вязкость по Шарпи - без надреза - с надрезом","кДж/м2"	,"- 3,5"),
            new Row("Твердость по Бринелю","МПа","375"),
            new Row("Диэлектрическая проницаемость при 106 Гц"	,"-	","3,3"),
            new Row("Тангенс угла диэлектрических потерь при 106 Гц",	"-"	,"0,001")
        ];
    }
}