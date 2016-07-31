import {Component, OnInit} from "@angular/core";

class Row{
    constructor(
        public proper: string,
        public _1: string,
        public _2: string,
        public _3: string,
        public _4:string
    ){}
}

class TableRow{
    constructor(
        public title: string,
        public price: string,
        public weight: string
    ){};
}

@Component({
    selector: 'fluoroplastic-component',
    templateUrl: 'app/html/products/engineering-plastic/fluoroplastic.component.html'
})

export class FluoroplasticComponent implements OnInit{

    public title: string[];
    public tablePlate: TableRow[];
    public tableBar: TableRow[];
    public tables: Row[];
    
    public titles: string[];

    public ngOnInit(){
        this.tablePlate = [
            new TableRow("Фторопласт лист 1х1000х1000 PTFE","240,00","2,25"),
            new TableRow("Фторопласт лист 2х1000х1000 PTFE","240,00","4,51"),
            new TableRow("Фторопласт лист 3х1000х1000 PTFE	","240,00","7,00"),
            new TableRow("Фторопласт лист 4х1000х1000 PTFE	","240,00","9,30"),
            new TableRow("Фторопласт лист 5x1000х1000 PTFE	","240,00","11,57"),
            new TableRow("Фторопласт лист 6x1000х1000 PTFE	","240,00","14,10"),
            new TableRow("Фторопласт лист 8х1000х1000 PTFE	","240,00","18,83"),
            new TableRow("Фторопласт лист 8х500x500 PTFE	","240,00","7,70"),
            new TableRow("Фторопласт лист д10x1000x1000 PTFE	","240,00","23,93"),
            new TableRow("Фторопласт лист д10x500x500 PTFE	","240,00","5,92"),
            new TableRow("Фторопласт лист д12х1000х1000 PTFE	","240,00","28,23"),
            new TableRow("Фторопласт лист д12х500х500 PTFE	","240,00","7,35"),
            new TableRow("Фторопласт лист д15x1000х1000 PTFE	","240,00","35,33"),
            new TableRow("Фторопласт лист д15x500x500 PTFE","240,00","	8,73"),
            new TableRow("Фторопласт лист д20x1000х1000 PTFE	","240,00","47,50"),
            new TableRow("Фторопласт лист д20x500х500 PTFE	","240,00","11,75"),
            new TableRow("Фторопласт лист д30x1000х1000 PTFE	","240,00","7,60"),
            new TableRow("Фторопласт лист д30x500х500 PTFE","240,00","	17,95"),
            new TableRow("Фторопласт лист д40x1000х1000 PTFE	","240,00","94,20"),
            new TableRow("Фторопласт лист д40x500х500 PTFE	","240,00","23,15"),
            new TableRow("Фторопласт лист д50x500х500 PTFE	","240,00","29,55"),
        ];

        this.tableBar = [
            new TableRow("Фторопласт пруток 10х1000 PTFE","190,00","0,18"),
            new TableRow("Фторопласт пруток 15х1000 PTFE	","190,00","0,45"),
            new TableRow("Фторопласт пруток 20х1000 PTFE	","190,00","0,75"),
            new TableRow("Фторопласт пруток 25х1000 PTFE	","190,00","1,15"),
            new TableRow("Фторопласт пруток 30х1000 PTFE	","190,00","1,73"),
            new TableRow("Фторопласт пруток 35х1000 PTFE	","190,00","2,13"),
            new TableRow("Фторопласт пруток 40х1000 PTFE	","190,00","3,10"),
            new TableRow("Фторопласт пруток 45х1000 PTFE	","190,00","3,66"),
            new TableRow("Фторопласт пруток 50х1000 PTFE	","190,00","4,60"),
            new TableRow("Фторопласт пруток 55х1000 PTFE	","190,00","5,50"),
            new TableRow("Фторопласт пруток 60х1000 PTFE	","190,00","6,53"),
            new TableRow("Фторопласт пруток 65х1000 PTFE	","190,00","7,00"),
            new TableRow("Фторопласт пруток 70х1000 PTFE	","190,00","8,70"),
            new TableRow("Фторопласт пруток 75х1000 PTFE	","190,00","10,23"),
            new TableRow("Фторопласт пруток 80х1000 PTFE	","190,00","11,60"),
            new TableRow("Фторопласт пруток 85х1000 PTFE	","190,00","13,00"),
            new TableRow("Фторопласт пруток 90х1000 PTFE	","190,00","15,00"),
            new TableRow("Фторопласт пруток 95х1000 PTFE	","190,00","16,20"),
            new TableRow("Фторопласт пруток д100х1000 PTFE	","190,00","17,85"),
            new TableRow("Фторопласт пруток д110х1000 PTFE	","190,00","22,00"),
            new TableRow("Фторопласт пруток д120х1000 PTFE	","190,00","25,00"),
            new TableRow("Фторопласт пруток д130х1000 PTFE	","190,00","30,70"),
            new TableRow("Фторопласт пруток д140х1000 PTFЕ	","190,00","35,25"),
            new TableRow("Фторопласт пруток д150х1000 PTFЕ	","190,00","41,60"),
            new TableRow("Фторопласт пруток д160x300 PTFE	","190,00","13,70"),
            new TableRow("Фторопласт пруток д170x300 PTFE	","190,00","15,55"),
            new TableRow("Фторопласт пруток д180x300 PTFE	","190,00","18,10"),
            new TableRow("Фторопласт пруток д190x300 PTFE	","190,00","19,56"),
            new TableRow("торопласт пруток д200x300 PTFE	","190,00","22,25"),
            new TableRow("Фторопласт пруток д220x300 PTFE	","190,00","26,20"),
            new TableRow("Фторопласт пруток д230x300 PTFE	","190,00","28,20"),
            new TableRow("Фторопласт пруток д240x300 PTFE	","190,00","31,80"),
            new TableRow("Фторопласт пруток д250x300 PTFE	","190,00","33,95"),
            new TableRow("Фторопласт пруток д270x300 PTFE	","190,00","41,87"),
            new TableRow("Фторопласт пруток д280x300 PTFE	","190,00","44,80"),
            new TableRow("Фторопласт пруток д300x300 PTFE	","190,00","49,50")
        ];

        this.titles = [
            "Свойства","Методы испытания","Температура (°С)","Единица измерения","Значение"
        ];

        this.tables = [
            new Row("Удельный вес","DIN 53479	","23°	","г/см3","	2,18"),
            new Row("Прочность на разрыв	","DIN 53479","	23°	","кг/см2	","200-380"),
            new Row("Испытание на растяжение","	DIN 53479	","23°	","%","	250-450"),
            new Row("Модуль эластичности	","DIN 53457	","23°	","кг/см2","	7500"),
            new Row("Предел прочности при кручении	","DIN 53447","	23°	","кг/см2","	1600"),
            new Row("Ударная вязкость	","DIN 53447	","23° 56° 77°","	кг/см2","	не разруш. 16 33"),
            new Row("Твердость	","DIN 53505","	23°	","-","	55-59"),
            new Row("Прочность на сжатие","	DIN 53455	","23°","	кг/см2","	70"),
            new Row("Теплопроводность	","DIN 52612	","-","	Ккал/м ч С°	","0,2-0,4"),
            new Row("Удельная теплоемкость","	-","	-	","Ккал/кг С°	","0,25"),
            new Row("Коэф. терморасширения	","ASTM-D 696	","23°-60° 100°-200°","	-	","10х10-5 21х10-5"),
            new Row("Диэлектрическая стойкость	","DIN 53841","	-","	Кв/мм	","20-30"),
            new Row("Диэлектрическая постоянная	","DIN 53483","	-	","-","	2,1"),
            new Row("Поверхностное сопротивление", "DIN 53482" , "23°" ,"Ом сек", "1016"),
            new Row("Объемное сопротивление","DIN 53482","23°","Ом см","1018"),
            new Row("Абсорбция воды","	DIN 53472","	-","	%	","0"),
            new Row("Коэф.трения по стали	","-	","-	","-	","0,04"),
            new Row("Стойкость к износу","	-","	-	","-	","абсолютн."),
            new Row("Диапазон рабочих температур","	-	","-","	°C	","-250...+260"),
        ];
    }
}