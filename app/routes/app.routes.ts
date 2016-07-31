import { provideRouter, RouterConfig } from '@angular/router';
import {RootPageComponent} from "../rootComponents/mainPage.component";
import {ContactsComponent} from "../rootComponents/contacts.component";
import {EngineeringPlasticComponent} from "../sections/engineeringPlastic.component";
import {PolyamideComponent} from "../products/engineering-plastic/polyamide.component";
import {PolyacetalComponent} from "../products/engineering-plastic/polyacetal.component";
import {MicaComponent} from "../products/engineering-plastic/mica.component";
import {VinylComponent} from "../products/engineering-plastic/vinyl.component";
import {TechtronComponent} from "../products/engineering-plastic/techtron.component";
import {FluoroplasticComponent} from "../products/engineering-plastic/fluoroplastic.component";
import {TextoliteComponent} from "../products/engineering-plastic/textolite.component";
import {PlasticCompoundComponent} from "../products/engineering-plastic/plastic-compound.component";
import {PolyesterimideComponent} from "../products/engineering-plastic/polyesterimide.component";
import {PolycarbonateComponent} from "../products/engineering-plastic/polycarbonate.component";
import {PolypropyleneComponent} from "../products/engineering-plastic/polypropylene.component";
import {PolyethyleneComponent} from "../products/engineering-plastic/polyethylene.component";
import {KetronPeekComponent} from "../products/engineering-plastic/ketron-peek.component";
import {Celazole_PBIComponent} from "../products/engineering-plastic/Celazole_PBI.component";
import {LavsanComponent} from "../products/engineering-plastic/lavsan.component";
import {PneumaticsComponent} from "../sections/pneumatics.component";
import {PolypropyleneProductsComponent} from "../sections/polypropylene-products.component";

export const routes: RouterConfig = [
    {
        path: '',
        children: [
            {path: '', component: RootPageComponent},
            {path: 'Pneumatics', children: [
                {path: '', component: PneumaticsComponent},
            ]},
            {path: 'PolypropyleneProducts' , children: [
                {path: '', component: PolypropyleneProductsComponent},
            ]},
            {path: 'Engineering-plastic',
                children: [
                    {path: '' , component:EngineeringPlasticComponent },
                    {path: 'Celazole_PBI' , component: Celazole_PBIComponent},
                    {path: 'Lavsan' , component: LavsanComponent},
                    {path: 'KetronPeek', component: KetronPeekComponent},
                    {path: 'Polyethylene', component: PolyethyleneComponent},
                    {path: 'Polypropylene', component: PolypropyleneComponent},
                    {path: 'Polycarbonate', component: PolycarbonateComponent},
                    {path: 'Polyesterimide', component: PolyesterimideComponent},
                    {path: 'PlasticCompound', component: PlasticCompoundComponent},
                    {path: 'Textolite', component: TextoliteComponent},
                    {path: 'Fluoroplastic', component: FluoroplasticComponent},
                    {path: 'Techtron', component: TechtronComponent},
                    {path: 'Vinyl', component: VinylComponent},
                    {path: 'Mica', component: MicaComponent},
                    {path: 'Polyacetal', component: PolyacetalComponent},
                    {path: 'Polyamide', component: PolyamideComponent}
                ]},
           ],
        useAsDefault: true
    },
    { path: 'contacts',      component: ContactsComponent },
];


export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];

