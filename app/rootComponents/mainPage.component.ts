import {Component, OnInit} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

class Section{
    constructor(
        public photo: string,
        public title: string,
        public priceFrom: string,
        public description: string,
        public pageLink: string
    ){};
}

@Component({
    selector: 'root-page-component',
    templateUrl: 'app/html/rootFiles/rootPage.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app/styles/rootPage.component.css']
})

export class RootPageComponent implements OnInit{
    
    public rootLinks: string[];
    
    public sections: Section[];
    
    public ngOnInit(){
        
        this.sections = [
            new Section(
                "app/images/rootPage/1.png", 
                "Конструкционный пластик",
                "От 43.34 грн.",
                "Конструкционный пластик - категория технических пластмасс промышленного применения, ориен -тированная на",
                "/Engineering-plastic"),
            new Section(
                "app/images/rootPage/2.jpg",
                "Пневматика",
                "От 300 грн.",
                "В наличии на складе пневмоцилиндры, блоки подготовки воздуха, соленоидные клапаны, фитинги и комплектующие.",
                "/Pneumatics"),
            new Section(
                "app/images/rootPage/3.jpg",
                "Изделия из полипропилена",
                "Уточнайте",
                "Полипропиленовые емкости используются в агропромышленном комплексе, производственной, хозяйственной отрасли",
                "/PolypropyleneProducts")
        ];
        
        //Slider deploying
        $(document).ready(function() {
            $(".slider").each(function () { // обрабатываем каждый слайдер
                console.log("hello");
                var obj = $(this);
                $(obj).append("<div class='nav'></div>");
                $(obj).find("li").each(function () {
                    $(obj).find(".nav").append("<span rel='" + $(this).index() + "'></span>"); // добавляем блок навигации
                    $(this).addClass("slider" + $(this).index());
                });
                $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
            });
        });
        function sliderJS (obj, sl) { // slider function
            var ul = $(sl).find("ul"); // находим блок
            var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
            var step = $(bl).width(); // ширина объекта
            $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
        }
        $(document).on("click", ".slider .nav span", function() { // slider click navigate
            var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
            $(sl).find("span").removeClass("on"); // убираем активный элемент
            $(this).addClass("on"); // делаем активным текущий
            var obj = $(this).attr("rel"); // узнаем его номер
            sliderJS(obj, sl); // слайдим
            return false;
        });

        this.rootLinks = [
            "menu-root",
            "menu-product",
            "menu-contacts"
        ];
        
        
    }
    
    public rootPageLinksClicked( currentId: string ){
        for(let i=0;i<this.rootLinks.length;i++){
            document.getElementById(this.rootLinks[i]).classList.remove("active");
        }
        document.getElementById( currentId ).classList.add("active");
    }
}