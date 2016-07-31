import {Component, OnInit} from "@angular/core";

class TableSheetRow{
    constructor(
        public title: string,
        public price: string
    ){}
}

class TablePlateRow{
    constructor(
        public title: string,
        public price: string,
        public weight: string
    ){};
}

class TableThermal{
    constructor(
        public proper: string,
        public value: string,
        public method: string,
        public _1000: string,
        public _500: string
    ){};
}

class Table{
    constructor(
        public theadTitle: string[]
    ){};
}
@Component({
    selector: 'polyethylene-component',
    templateUrl: 'app/html/products/engineering-plastic/polyethylene.component.html'
})

export class PolyethyleneComponent implements OnInit{
    public tablePlate: TablePlateRow[];
    public tableSheet: TableSheetRow[];
    public tableBar: TablePlateRow[];
    public mechanicalTitle: string[];
    public mechanicalData: string[];
    public thermalTitle: string[];
    public thermalData: string[];
    public thermalTitle1: string[];
    public thermalData1: TableThermal[];

    public ngOnInit(){
        this.tableSheet = [
            new TableSheetRow("Полиэтилен лист 35х1220х2050 HD500 CESTILENE	","4896.25 грн"),
            new TableSheetRow("Полиэтилен лист 35х1220х3050 TIVAR 1000	","9345.42 грн"),
            new TableSheetRow("Полиэтилен лист 40х1020х2050 CESTILENE HD500	","4683.26 грн"),
            new TableSheetRow("Полиэтилен лист 50х1220х3050 HD500 CESTILENE	","10371.82 грн"),
            new TableSheetRow("Полиэтилен лист 8х1010х2020 PE500	","1057.73 грн"),
            new TableSheetRow("Полиэтилен лист 8х1220х2020 PE500	","1303.90 грн"),
        ];

        this.tablePlate = [
            new TablePlateRow("Полиэтилен-1000 плита 8х1000х3000","2910,60	","24,00"),
            new TablePlateRow("Полиэтилен-1000 плита 10х1000х3000	","3637,36	","30,00"),
            new TablePlateRow("Полиэтилен-1000 плита 12х1000х3000	","4365,90	","36,00"),
            new TablePlateRow(" Полиэтилен-1000 плита 15х1000х3000","	5457,37","	45,00"),
            new TablePlateRow(" Полиэтилен-1000 плита 20х1000х3000","	7274,68","	60,00"),
            new TablePlateRow("Полиэтилен-1000 плита 25х1000х3000	","9093,27","	75,00"),
            new TablePlateRow("Полиэтилен-1000 плита 30х1000х3000	","10911,92","	90,00"),
            new TablePlateRow(" Полиэтилен-1000 плита 35х1000х3000	","12733,87","	105,00"),
            new TablePlateRow("Полиэтилен-1000 плита 40х1000х3000	","14549,37	","120,00"),
            new TablePlateRow("Полиэтилен-1000 плита 50х1000х3000	","18191,25	","150,00"),
            new TablePlateRow("Полиэтилен-500 плита 2х1000х2000	","352,35	"," 3,80"),
            new TablePlateRow("Полиэтилен-500 плита 3х1000х2000	","504,60	","5,80"),
            new TablePlateRow("Полиэтилен-500 плита 4х1000х2000	","670,00	"," 7,70"),
            new TablePlateRow("Полиэтилен-500 плита 5х1000х2000","	835,20	"," 9,60"),
            new TablePlateRow("Полиэтилен-500 плита 6х1000х2000	","1000,50	 ","11,50"),
            new TablePlateRow("Полиэтилен-500 плита 8х1000х2000	"," 1260,00	 ","16,00"),
            new TablePlateRow("Полиэтилен-500 плита 8х1000х3000	"," 2028,00	"," 24,00"),
            new TablePlateRow("Полиэтилен-500 плита 8х1000х3000 голуб	 ","2436,00	"," 24,00"),
            new TablePlateRow("Полиэтилен-500 плита 8х1500х2000	 ","2028,00	 ","24,00"),
            new TablePlateRow("Полиэтилен-500 плита 10х1000х2000	"," 1579,66	"," 20,00"),
            new TablePlateRow("Полиэтилен-500 плита 10х1000х3000	"," 2516,40","	 30,00"),
            new TablePlateRow("Полиэтилен-500 плита 10х1500х2000	"," 2516,40","	 30,00"),
            new TablePlateRow("Полиэтилен-500 плита т12х1000х2000	"," 1895,58	 ","24,00"),
            new TablePlateRow("Полиэтилен-500 плита т12х1000х3000	"," 3021,00	 ","36,00"),
            new TablePlateRow("Полиэтилен-500 плита т12х1500х2000	"," 3021,00	"," 36,00"),
            new TablePlateRow("Полиэтилен-500 плита т15х1000х2000	"," 2244,72	"," 30,00"),
            new TablePlateRow("Полиэтилен-500 плита т15х1000х3000	"," 3416,40	"," 45,00"),
            new TablePlateRow("Полиэтилен-500 плита т15х1500х2000	"," 3416,40	 ","45,00"),
            new TablePlateRow("Полиэтилен-500 плита т20х1000х2000	 ","2910,00	"," 40,00"),
            new TablePlateRow("Полиэтилен-500 плита т20х1000х3000	 ","4365,00	"," 60,00"),
            new TablePlateRow("Полиэтилен-500 плита т20х1500х2000	"," 4365,00	 ","60,00"),
            new TablePlateRow("Полиэтилен-500 плита т25х1000х3000	"," 5456,00	"," 75,00"),
            new TablePlateRow("Полиэтилен-500 плита т25х1500х2000	 ","5456,00	 ","75,00"),
            new TablePlateRow("Полиэтилен-500 плита т30х1000х3000	 ","6547,20	 ","90,00"),
            new TablePlateRow("Полиэтилен-500 плита т30х1500х2000	"," 6547,20	"," 90,00"),
            new TablePlateRow("Полиэтилен-500 плита т35х1000х3000	"," 7638,44	 ","105,00"),
            new TablePlateRow("Полиэтилен-500 плита т40х1000х3000	"," 8729,61	 ","120,00"),
            new TablePlateRow("Полиэтилен-500 плита т40х1500х2000	"," 8729,61	"," 120,00"),
            new TablePlateRow("Полиэтилен-500 плита т50х1000х3000	"," 10912,04	"," 150,00"),
            new TablePlateRow("Полиэтилен-500 плита т50х1500х2000	"," 10912,04	"," 150,00"),
            new TablePlateRow("Полиэтилен-500 плита т60х1000х3000	 ","13094,42	"," 182,60"),
            new TablePlateRow("Полиэтилен-500 плита т60х1500х2000	 ","13094,42	"," 182,60")
        ];

        this.tableBar = [
            new TablePlateRow("Полиэтилен-500 пруток 20х1000","78,00","0,34"),
            new TablePlateRow("Полиэтилен-500 пруток 25х1000","78,00","	0,53"),
            new TablePlateRow("Полиэтилен-500 пруток 30х1000","78,00","	0,75"),
            new TablePlateRow("Полиэтилен-500 пруток 35х1000","78,00","	1,05"),
            new TablePlateRow("Полиэтилен-500 пруток 40х1000","78,00","	1,35"),
            new TablePlateRow("Полиэтилен-500 пруток 45х1000","78,00","	1,65"),
            new TablePlateRow("Полиэтилен-500 пруток 50х1000	","78,00","2,00"),
            new TablePlateRow("Полиэтилен-500 пруток 55х1000	","78,00","2,50"),
            new TablePlateRow("Полиэтилен-500 пруток 60х1000	","78,00","3,00"),
            new TablePlateRow("Полиэтилен-500 пруток 65х1000	","78,00","3,60"),
            new TablePlateRow("Полиэтилен-500 пруток 70х1000	","78,00","4,00"),
            new TablePlateRow("Полиэтилен-500 пруток 75х1000	","78,00","4,50"),
            new TablePlateRow("Полиэтилен-500 пруток 80х1000	","78,00","5,10"),
            new TablePlateRow("Полиэтилен-500 пркток 90х1000	","78,00","6,50"),
            new TablePlateRow("Полиэтилен-500 пруток 100х1000	","78,00","8,10"),
            new TablePlateRow("Полиэтилен-500 пруток 110х1000	","78,00","10,10"),
            new TablePlateRow("Полиэтилен-500 пруток 120х1000	","78,00","12,00"),
            new TablePlateRow("Полиэтилен-500 пруток 130х1000	","78,00","14,50"),
            new TablePlateRow("Полиэтилен-500 пруток 135х1000	","78,00","15,40"),
            new TablePlateRow("Полиэтилен-500 пруток 140х1000	","78,00","17,00"),
            new TablePlateRow("Полиэтилен-500 пруток 150х1000	","78,00","19,00"),
            new TablePlateRow("Полиэтилен-500 пруток 160х1000	","78,00","22,80"),
            new TablePlateRow("Полиэтилен-500 пруток 175х1000","91,00","25,00"),
            new TablePlateRow("Полиэтилен-500 пруток 200х1000	","91,00","33,00"),
            new TablePlateRow("Полиэтилен-500 пруток 235х1000	","91,00","45,70"),
            new TablePlateRow("Полиэтилен-500 пруток 250х1000	","91,00","52,00"),
            new TablePlateRow("Полиэтилен-500 пруток 300х1000	","91,00","75,00")
        ];

        this.mechanicalTitle = [
            "Растягивающее напряжение на выходе при разрыве (Н/мм2)",
            "Удлинение при разрыве (%)",
            "Коэффициент растяжения эластичности (Н/мм2)",
            "Испытание на сжатие 1% напряжение 1000 час. (Н/мм2)",
            "Ударная вязкость по Шарпи 7,5 Дж (КДж/м2 )",
            "Испытания на удар образца с надрезом (Шарпи), (КДж/м2 )",
            "Определение твердости вдавливанием шарика, (Н/мм2)",
            "Твердость по Роквеллу (сухой)",
            "Коэффициент трения со сталью"
        ];

        this.mechanicalData = [
            "26","600","800","3","n.b.","50","50","R60","0,32"
        ];

        this.thermalTitle = [
            "Температура Плавления",
            "Тепло-проводность (Вт/км)",
            "Деформация при температуре тепловой деформации (ºС)",
            "Коэффициент линейного расширения при 23-60ºС (10-6.К-1)",
            "Постоянная рабочая температура (ºС)"
        ];

        this.thermalData = [
            "130","0,4","50","200","80"
        ];

        this.thermalTitle1 = [
            "Свойства","Величина измерения","Метод","Полиэтилен 1000","Полиэтилен 500"
        ];
        this.thermalData1 = [
            new TableThermal("Плотность","	g/cm2","DIN53479","0.94","0.95"),
            new TableThermal("Молекулярный вес	","millones	","DIN53479	","04.Тра","	0.5"),
            new TableThermal("Устойчивость к волочению	","N/mm2	","DIN53455	","22	","28"),
            new TableThermal("Устойчивость к надлому +23º	","N/mm2	","DIN53455","	44	","38"),
            new TableThermal("Устойчивость к растяжению +23º	","N/mm2","	DIN53455","	-350	","1000"),
            new TableThermal("Устойчивость на изгибе при +23º","	N/mm2	","DIN53477	","250","	350"),
            new TableThermal("Устойчивость на изгибе при -40º	","N/mm2	","DIN53477	","370","	700"),
            new TableThermal("Испытание твердости методом вдавливания шарика","	N/mm2","	DIN53456","	38","	50"),
            new TableThermal("Ударная прочность поШарпиD","-","-","66","68"),
            new TableThermal("Скольжение","	PE1000=100","	DIN53453	","100	","250"),
            new TableThermal("Индекс скольжения при трении","	mj/mm2","	DIN53453	","210","	40")
        ];

    }
}
