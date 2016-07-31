import {Component, OnInit} from "@angular/core";

class Row{
    constructor(
        public proper: string,
        public unit: string,
        public _1000: string,
        public hpv: string,
        public gf30: string,
        public ca30: string
    ){}
}

class Table{
    constructor(
        public theadTitle: string[],
        public tbodyData: Row[]
    ){};
}
@Component({
    selector: 'ketronPeek-component',
    templateUrl: 'apphtml/products/engineering-plastic/ketron-peek.component.html'
})

export class KetronPeekComponent implements OnInit{
    public properties: Table;

    public ngOnInit(){
     this.properties = new Table([
         "Свойства","Ед. изм","1000","HPV","GF30","CA30"
     ],[
         new Row("Плотность","г/см3","1,31","1,45","1,51","1,41"),
         new Row("Водопоглощение: за 24 часа, максимальное","%","0,06","0,45","0,05","0,3 - 0,3 - 0,3"),
         new Row("Температура плавления	","°С","340","340","340","340"),
         new Row("К-т теплопроводности при 23° С","Вт/Кхм","0,25","0,24","0,43","0,92"),
         new Row("К-т линейного расширения при температурах 23-100 °С","м/м*К","5х10-5","3х10-5","3х10-5","2,5х10-5"),
         new Row("Температура начала изгиба под нагрузкой 1,8 МПа","°С","160","195","230","230"),
         new Row("Диапазон рабочих температур","°С","+250","+250","+250","+250"),
         new Row("Предел прочности при растяжении","МПа	","-","75","90","130"),
         new Row("Напряжение при сжатии (2% деформация)","МПа","57","67","81","97"),
         new Row("Относительное удлинение при разрыве","%","20","5","5","5"),
         new Row("Модуль упругости","МПа","4400","5900","6300","7700"),
         new Row("Ударная вязкость по Шарпи – без надреза – с надрезом	","кДж/ м2	","- 3,5	","25 2,5","	35 4","	35 4"),
         new Row("Твердость по Бринелю","	МПа	","230	","215	","270	","325"),
         new Row("Диэлектрическая проницаемость при 106 Гц	","-"," 	-","	3,2","	-","	3,6"),
         new Row("Тангенс угла диэлектрических потерь при 106 Гц","-","	 	-	","0,002","	-	","0,002"),
         new Row("Коэффициент трения","-","-","0,15-0,25","0,3-0,45","0,2-0,3"),
     ])
    }
}
