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

@Component({
    selector: 'polycarbonate-component',
    templateUrl: 'app/html/products/engineering-plastic/polycarbonate.component.html'
})

export class PolycarbonateComponent implements OnInit{

    public production: ProductTable[];

    public mechanicalPropertiesTitle: string[];
    public mechanicalPropertiesData: string[];

    public thermalPropertiesTitle: string[];
    public thermalPropertiesData: string[];

    public electricPropertiesTitle: string[];
    public electricPropertiesData: string[];

    public ngOnInit(){

        this.production = [
            new ProductTable("Поликарбонат пруток 20х1000","316,00","0,40"),
            new ProductTable("Поликарбонат пруток 30х1000","316,00","	0,90"),
            new ProductTable("Поликарбонат пруток 40х1000	","316,00","1,70"),
            new ProductTable("Поликарбонат пруток 50х1000	","316,00","2,50"),
            new ProductTable("Поликарбонат пруток 60х1000	","316,00","3,60"),
            new ProductTable("Поликарбонат пруток 70х1000	","316,00","5,00"),
            new ProductTable("Поликарбонат пруток 80х1000	","316,00","6,40"),
            new ProductTable("Поликарбонат пруток 90х1000	","316,00","8,50"),
            new ProductTable("Поликарбонат пруток 100х1000	","316,00","10,00"),
            new ProductTable("Поликарбонат пруток 110х1000	","316,00","12,00"),
            new ProductTable("Поликарбонат пруток 120х1000	","316,00","14,90")
        ];

        this.mechanicalPropertiesTitle = [
            "Растягивающее напряжение на выходе при разрыве (Н/мм2)",
            "Удлинение при разрыве (%)","Коэффициент растяжения эластичности (Н/мм2)",
            "Испытание на сжатие 1% напряжение 1000 час. (Н/мм2)",
            "Ударная вязкость по Шарпи 7,5 Дж (КДж/м2 )",
            "Испытания на удар образца с надрезом (Шарпи), (КДж/м2 )",
            "Определение твердости вдавливанием шарика, (Н/мм2)	",
            "Твердость по Роквеллу (сухой)",
            "Коэффициент трения со сталью"
        ];

        this.mechanicalPropertiesData = [
            "65",
            "100",
            "2300",
            "18	n.b.",
            "23	",
            "110",
            "M75",
            "0,5"
        ];

        this.thermalPropertiesTitle = [
             "Температура Плавления",
             "Тепло-проводность (Вт/км)",
             "Деформация при температуре тепловой деформации (ºС)",
             "Коэффициент линейного расширения при  23-60ºС	(10-6.К-1)",
             "Постоянная рабочая температура (ºС)"
        ];

        this.thermalPropertiesData = [
            "135",
            "-50",
            "HB V2",
            "25"
        ];

        this.electricPropertiesTitle = [
            "Диэлектрическая константа при 1МГц	","" +
            "Электрическая прочность диэлектрика (кВ/мм)",
            "Объемное удельное сопротивление (Ом/см)",
            "Коэффициент рассеяния тангенс потерь при 1 МГц"
        ];

        this.electricPropertiesData = [
            "3","30","1016","0,01"
        ];
    }
}

