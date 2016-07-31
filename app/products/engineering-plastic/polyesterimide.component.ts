import {Component, OnInit} from "@angular/core";

class Row{
    constructor(
        public proper: string,
        public unit: string,
        public pei: string,
        public psu: string
    ){}
}

class Table{
    constructor(
        public theadTitle: string[],
        public tbodyData: Row[]
    ){};
}

@Component({
    selector: 'polyesterimide-component',
    templateUrl: 'app/html/products/engineering-plastic/polyesterimide.component.html'
})

export class PolyesterimideComponent implements OnInit{

    public properties: Table;

    public ngOnInit(){
          this.properties = new Table(
              [
                  "Свойства","Ед. изм","PEI 1000","PSU 1000"
              ],
              [
                  new Row("Плотность","г/см3	","1,27	","1,24"),
                  new Row("Водопоглощение: за 24 часа, максимальное	","%	","0,26 1,35	","0,32 0,85"),
                  new Row("Температура плавления	","°С	","-	","-"),
                  new Row("К-т теплопроводности при 23° С	","Вт/Кхм	","0,22","	0,26"),
                  new Row("К-т линейного расширения при температурах 23-60 °С	","м/м*К	","4,5х10-5","	6х10-5"),
                  new Row("Температура начала изгиба под нагрузкой 1,8 МПа	","°С	","200","	175"),
                  new Row("Диапазон рабочих температур	","°С","	-50+170	","-50+150"),
                  new Row("Предел прочности при растяжении	","МПа","	105","	80"),
                  new Row("Напряжение при сжатии (1% деформация)","	МПа","	130","	90"),
                  new Row("Относительное удлинение при разрыве	","%	","10	","10"),
                  new Row("Модуль упругости	","МПа","	3000","	2500"),
                  new Row("Ударная вязкость по Шарпи без надреза	","кДж/м2	","-	","-"),
                  new Row("Твердость по Бринелю	","МПа	","170","	155"),
                  new Row("Диэлектрическая проницаемость при 106 Гц	","-	","3	","3"),
                  new Row("Тангенс угла диэлектрических потерь при 106 Гц	","-	","0,002	","0.003"),
              ]
          )
    }
}

