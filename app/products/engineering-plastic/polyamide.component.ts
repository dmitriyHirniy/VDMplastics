import {Component, OnInit} from "@angular/core";

class Row{
    constructor(
        public _1: string,
        public _2: string
    ){}
}

class ProductTable{
    constructor(
        public title: string,
        public price: string,
        public weight: string
    ){};
}
class ProductTablePlate{
    constructor(
        public title: string,
        public price: string
    ){};
}

@Component({
    selector: 'polyamide-component',
    templateUrl: 'app/html/products/engineering-plastic/polyamide.component.html'
})

export class PolyamideComponent implements OnInit{

    public priceTableSheet: ProductTable[];
    public priceTablePlate: ProductTablePlate[];
    public priceTableBar: ProductTablePlate[];
    public priceTableTube: ProductTablePlate[];

    public ngOnInit(){

        this.priceTableSheet = [
            new ProductTable("Полиамид лист 2х1000х2000 6 SA","816,00","5,00"),
            new ProductTable("Полиамид лист 3х1000х2000 6 SA","1214,13","7,40"),
            new ProductTable("Полиамид лист 4х1000х2000 6 SA","1583,00","9,70"),
            new ProductTable("Полиамид лист 5х1000х2000 6 SA","1958,00","12,00"),
            new ProductTable("Полиамид лист 6х1000х2000 6 SA","2350,00","14,40")
        ];

        this.priceTablePlate = [
            new ProductTablePlate("Полиамид плита 10х1220x2440 6PLA + MoS2","4046.24 грн"),
            new ProductTablePlate("Полиамид плита 10х610х1000 6SA черный	","626.75 грн"),
            new ProductTablePlate("Полиамид плита 10х625х1250 6PLA	","982.14 грн"),
            new ProductTablePlate("Полиамид плита 12х1220x2440 6G Oil	","4600.00 грн"),
            new ProductTablePlate("Полиамид плита 12х625х1250 6PLA	","1179.48 грн"),
            new ProductTablePlate("Полиамид плита 12х625х1250 6PLA черн	","1187.24 грн"),
            new ProductTablePlate("Полиамид плита 15x1000х2000 6PLA	","3120.10 грн"),
            new ProductTablePlate("Полиамид плита 15x1000х2000 6PLA черный	","3285.74 грн"),
            new ProductTablePlate("Полиамид плита 15х1220x2440 6PLA	","4855.19 грн"),
            new ProductTablePlate("Полиамид плита 15х625х1250 6PLA	","1103.45 грн"),
            new ProductTablePlate("Полиамид плита 15х625х1250 6PLA черный	","1162.02 грн"),
            new ProductTablePlate("Полиамид плита 20x500х2000 6-GF 30	","7500.00 грн"),
            new ProductTablePlate("Полиамид плита 20х1000x2000 6PLA	","3957.20 грн"),
            new ProductTablePlate("Полиамид плита 20х1000x2000 6PLA черн	","4167.28 грн"),
            new ProductTablePlate("Полиамид плита 20х625х1250 6PLA	","1474.44 грн"),
            new ProductTablePlate("Полиамид плита 20х625х1250/черный 6PLA	","1550.00 грн"),
            new ProductTablePlate("Полиамид плита 25х1000x2000 6PLA","	4756.25 грн"),
            new ProductTablePlate("Полиамид плита 25х625х1250 6PLA	","1835.92 грн"),
            new ProductTablePlate("Полиамид плита 30х1000x2000 6PLA	","5783.60 грн"),
            new ProductTablePlate("Полиамид плита 30х1000x2000 6PLA + MoS2","	7356.80 грн"),
            new ProductTablePlate("Полиамид плита 30х1000x2000 6PLA черн	","6090.64 грн"),
            new ProductTablePlate("Полиамид плита 30х625х1250 6PLA	","2235.55 грн"),
            new ProductTablePlate("Полиамид плита 30х625х1250 6PLA черный	","2324.06 грн"),
            new ProductTablePlate("Полиамид плита 40х1000x2000 6PLA + MoS2	","9873.60 грн"),
            new ProductTablePlate("Полиамид плита 40х1000х2000 6PLA","	7762.20 грн"),
            new ProductTablePlate("Полиамид плита 40х500х2000 6-GF30","	14507.30 грн"),
            new ProductTablePlate("Полиамид плита 40х625х1250 6PLA	","2948.60 грн"),
            new ProductTablePlate("Полиамид плита 45х1220x2440 6G Oil	","16700.00 грн"),
            new ProductTablePlate("Полиамид плита 50х1000х2000 6PLA	","9500.00 грн"),
            new ProductTablePlate("Полиамид плита 50х625х1250 6PLA	","3667.00 грн"),
            new ProductTablePlate("Полиамид плита 60х1000x2000 6PLA + MoS2","	14520.00 грн"),
            new ProductTablePlate("Полиамид плита 60х1000х1000 6PLA	","5700.00 грн"),
            new ProductTablePlate("Полиамид плита 70х1000х1000 6PLA	","5136.74 грн"),
            new ProductTablePlate("Полиамид плита д100х1000х1000 6PLA	","9539.64 грн"),
            new ProductTablePlate("Полиамид плита 10х610х1220 ERTALON 6PLA	","747.72 грн"),
            new ProductTablePlate("Полиамид плита 10х610х1220 ERTALON 6XAU+","	747.72 грн"),
            new ProductTablePlate("Полиамид плита 12х610х1220 ERTALON 6PLA	","883.58 грн")
        ];

        this.priceTableBar = [
            new ProductTablePlate("Полиамид пруток 8х1000 6SA ","-"),
            new ProductTablePlate("Полиамид пруток 10х1000 6 SA	","7.39 грн"),
            new ProductTablePlate("Полиамид пруток 12х1000 6 SA	","11.09 грн"),
            new ProductTablePlate("Полиамид пруток 15х1000 6 SA	","20.14 грн"),
            new ProductTablePlate("Полиамид пруток 15х1000 6 SA черный","	17.24 грн"),
            new ProductTablePlate("Полиамид пруток 16х1000 6 SA","	18.48 грн"),
            new ProductTablePlate("Полиамид пруток 18х1000 6 SA	","29.70 грн"),
            new ProductTablePlate("Полиамид пруток 20х1000 6 SA","	27.35 грн"),
            new ProductTablePlate("Полиамид пруток 20х1000 6 SA черный	","30.80 грн"),
            new ProductTablePlate("Полиамид пруток 22х1000 6 SA","	35.57 грн"),
            new ProductTablePlate("Полиамид пруток 25х1000 6 SA	","44.35 грн"),
            new ProductTablePlate("Полиамид пруток 25х1000 6 SA черный","	45.59 грн"),
            new ProductTablePlate("Полиамид пруток 25х1000 66 SA	","81.48 грн"),
            new ProductTablePlate("Полиамид пруток 28х1000 6 SA	","56.63 грн"),
            new ProductTablePlate("Полиамид пруток 30х1000 6 SA	","65.05 грн"),
            new ProductTablePlate("Полиамид пруток 30х1000 6 SA черный	","65.05 грн"),
            new ProductTablePlate("Полиамид пруток 32х1000 6 SA	","71.04 грн"),
            new ProductTablePlate("Полиамид пруток 35х1000 6 SA	","86.58 грн"),
            new ProductTablePlate("Полиамид пруток 35х1000 6 SA черный	","86.58 грн"),
            new ProductTablePlate("Полиамид пруток 40х1000 6 SA	","110.88 грн"),
            new ProductTablePlate("Полиамид пруток 40х1000 6 SA черный	","110.88 грн"),
            new ProductTablePlate("Полиамид пруток 45х1000 6 SA	","142.76 грн"),
            new ProductTablePlate("Полиамид пруток 45х1000 6 SA черный	","140.45 грн"),
            new ProductTablePlate("Полиамид пруток 50х1000 6PLA","	192.01 грн"),
            new ProductTablePlate("Полиамид пруток 50х1000 6SA черный	","192.01 грн"),
            new ProductTablePlate("Полиамид пруток 55х1000 6PLA	","231.72 грн"),
            new ProductTablePlate("Полиамид пруток 55х1000 6SA черный	","231.72 грн"),
            new ProductTablePlate("Полиамид пруток 60х1000 6PLA	","267.58 грн"),
            new ProductTablePlate("Полиамид пруток 60х1000 6SA черный	2","67.58 грн"),
            new ProductTablePlate("Полиамид пруток 65х1000 6PLA","	314.80 грн"),
            new ProductTablePlate("Полиамид пруток 65х1000 6SA черный	","323.77 грн"),
            new ProductTablePlate("Полиамид пруток 70х1000 6PLA	","359.87 грн"),
            new ProductTablePlate("Полиамид пруток 70х1000 6SA черный	","359.87 грн"),
            new ProductTablePlate("Полиамид пруток 70х3000 6PLA	","1086.06 грн"),
            new ProductTablePlate("Полиамид пруток 80х1000 6PLA","	474.30 грн"),
            new ProductTablePlate("Полиамид пруток 80х1000 6PLA черный	","496.22 грн"),
            new ProductTablePlate("Полиамид пруток 80х1000 6SA черный	","474.30 грн"),
            new ProductTablePlate("Полиамид пруток 90х1000 6PLA","	602.17 грн"),
            new ProductTablePlate("iПолиамид пруток 90х1000 6SA черный	","602.24 грн"),
            new ProductTablePlate("Полиамид пруток д100х1000 6PLA	","736.90 грн"),
            new ProductTablePlate("Полиамид пруток д100х1000 6PLA черный	","775.94 грн"),
            new ProductTablePlate("Полиамид пруток д110х1000 6PLA	","905.18 грн"),
            new ProductTablePlate("Полиамид пруток д110х1000 6PLAчерный	","929.83 грн"),
            new ProductTablePlate("Полиамид пруток д120х1000 6PLA	","1067.68 грн"),
            new ProductTablePlate("Полиамид пруток д120х1000 6PLA черный	","1121.48 грн"),
            new ProductTablePlate("Полиамид пруток д130х1000 6PLA	","1247.40 грн"),
            new ProductTablePlate("Полиамид пруток д130х1000 6PLА черный	","1298.56 грн"),
            new ProductTablePlate("Полиамид пруток д130х500 6PLA	","623.70 грн"),
            new ProductTablePlate("Полиамид пруток д140х1000 6PLA	","1416.49 грн"),
            new ProductTablePlate("Полиамид пруток д140х1000 6PLA черный	","1495.30 грн"),
            new ProductTablePlate("Полиамид пруток д140х500 6PLA	","708.24 грн"),
            new ProductTablePlate("Полиамид пруток д150х1000 6PLA	","1664.09 грн"),
            new ProductTablePlate("Полиамид пруток д150х1000 6PLA черный","	1715.66 грн"),
            new ProductTablePlate("Полиамид пруток д150х500 6PLA	","832.04 грн"),
            new ProductTablePlate("Полиамид пруток д160х1000 6PLA	","1927.20 грн"),
            new ProductTablePlate("Полиамид пруток д160х500 6PLA	","963.60 грн"),
            new ProductTablePlate("Полиамид пруток д170х1000 6PLA	","2160.86 грн"),
            new ProductTablePlate("Полиамид пруток д170х500 6PLA	","1080.43 грн"),
            new ProductTablePlate("Полиамид пруток д180х1000 6PLA	","2413.96 грн"),
            new ProductTablePlate("Полиамид пруток д180х1000 6PLA черный	","2541.89 грн"),
            new ProductTablePlate("Полиамид пруток д180х500 6PLA	","1206.98 грн"),
            new ProductTablePlate("Полиамид пруток д190х1000 6PLA	","2746.63 грн"),
            new ProductTablePlate("Полиамид пруток д200х1000 6PLA	","2967.84 грн"),
            new ProductTablePlate("Полиамид пруток д200х500 6PLA	","1483.96 грн"),
            new ProductTablePlate("Полиамид пруток д210х1000 6PLA	","3314.74 грн"),
            new ProductTablePlate("Полиамид пруток д210х500 6PLA	","1657.37 грн"),
            new ProductTablePlate("Полиамид пруток д220х1000 6PLA	","3623.18 грн"),
            new ProductTablePlate("Полиамид пруток д220х500 6PLA	","1811.59 грн"),
            new ProductTablePlate("Полиамид пруток д230х1000 6PLA	","3950.12 грн"),
            new ProductTablePlate("Полиамид пруток д230х500 6PLA	","1975.06 грн"),
            new ProductTablePlate("Полиамид пруток д240х500 6PLA	","2150.58 грн"),
            new ProductTablePlate("Полиамид пруток д250х1000 6PLA	","4646.95 грн"),
            new ProductTablePlate("Полиамид пруток д250х500 6PLA	","2331.89 грн"),
            new ProductTablePlate("Полиамид пруток д270х500 6PLA	","2700.78 грн"),
            new ProductTablePlate("Полиамид пруток д280х500 6PLA	","2948.66 грн"),
            new ProductTablePlate("Полиамид пруток д300х1000 6PLA	","6656.36 грн"),
            new ProductTablePlate("Полиамид пруток д300х500 6PLA	","3318.70 грн"),
            new ProductTablePlate("Полиамид пруток д325х1000 6PLA	","7861.00 грн"),
            new ProductTablePlate("Полиамид пруток д325х500 6PLA	","3930.50 грн"),
            new ProductTablePlate("Полиамид пруток д350х1000 6PLA	","9088.80 грн"),
            new ProductTablePlate("Полиамид пруток д350х500 6PLA	","4406.69 грн"),
            new ProductTablePlate("Полиамид пруток д400х500 6PLA	","5903.47 грн"),
            new ProductTablePlate("Полиамид пруток д450х1000 6PLA	","14980.68 грн"),
            new ProductTablePlate("Полиамид пруток д500х500 6PLA	","9208.50 грн")
        ];      

        this.priceTableTube = [
            new ProductTablePlate("Полиамид труба 50х20х1000 6SA	","240.24 грн"),
            new ProductTablePlate("Полиамид труба д100х80х1000 6PLA	","435.16 грн"),
            new ProductTablePlate("Полиамид труба д120х105х1000 6PLA","	462.00 грн"),
            new ProductTablePlate("Полиамид труба д140х100x1000 6PLA	","1122.50 грн"),
            new ProductTablePlate("Полиамид труба д150х120x1000 6PLA","	1125.85 грн"),
            new ProductTablePlate("Полиамид труба д170х150х1000 6PLA","	1047.53 грн"),
            new ProductTablePlate("Полиамид труба д170х160х1000 6PLA","	739.20 грн"),
            new ProductTablePlate("Полиамид труба д180х160х1000 6PLA","	1064.74 грн"),
            new ProductTablePlate("Полиамид труба д190х150x1000 6PLA","	1811.16 грн"),
            new ProductTablePlate("Полиамид труба д200х180х1000 6PLA","	1237.56 грн"),
            new ProductTablePlate("Полиамид труба д220х170х1000 6PLA","	2153.26 грн"),
            new ProductTablePlate("Полиамид труба д220х175х1000 6G Oil","	2583.00 грн"),
            new ProductTablePlate("Полиамид труба д230х190х1000 6PLA","	2059.70 грн"),
            new ProductTablePlate("Полиамид труба д240х190х1000 6PLA","	2440.36 грн"),
            new ProductTablePlate("Полиамид труба д240х200х1000 6PLA","	2105.40 грн"),
            new ProductTablePlate("Полиамид труба д250х210х1000 6PLA","	2201.10 грн"),
            new ProductTablePlate("Полиамид труба д280х220х1000 6PLA","	3445.20 грн")
        ];
    }
}

