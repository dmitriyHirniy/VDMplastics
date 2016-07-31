import {Component, OnInit} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {RootPageComponent} from "./rootComponents/mainPage.component";
import {ContactsComponent} from "./rootComponents/contacts.component";

@Component({
    selector: 'app',
    templateUrl: 'app/html/rootFiles/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    stylesUrls: ['app/styles/app.component.css'],
    precompile: [RootPageComponent, ContactsComponent]
})

export class AppComponent implements OnInit{
    public rootLinks: string[];
    
    public ngOnInit(){
        this.rootLinks = [
            "menu-root",
            "menu-product",
            "menu-contacts"
        ];
    }
    
    public rootLinksClicked( currentId: string ){
        for(let i=0;i<this.rootLinks.length;i++){
            document.getElementById(this.rootLinks[i]).classList.remove("active");
        }
        document.getElementById( currentId ).classList.add("active");
    }
}
