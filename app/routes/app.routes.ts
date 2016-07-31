import { provideRouter, RouterConfig } from '@angular/router';
import {RootPageComponent} from "../rootComponents/mainPage.component";
import {ContactsComponent} from "../rootComponents/contacts.component";
import {EngineeringPlasticComponent} from "../sections/engineeringPlastic.component";

export const routes: RouterConfig = [
    {
        path: '',
        children: [
            {path: '', component: RootPageComponent},
            {path: 'Engineering-plastic',
                children: [
                    {path: '' , component:EngineeringPlasticComponent },
                   // {path: 'Celazole_PBI' , component: Celazole_PBIComponent},
                   // {path: 'Lavsan' , component: LavsanComponent},
                   // {path: 'KetronPeek', component: KetronPeekComponent},
                   // {path: 'Polyethylene', component: PolyethyleneComponent},
                   // {path: 'Polypropylene', component: PolypropyleneComponent},
                   // {path: 'Polycarbonate', component: PolycarbonateComponent},
                    //{path: 'Polyesterimide', component: PolyesterimideComponent},
                   // {path: 'PlasticCompound', component: PlasticCompoundComponent},
                   // {path: 'Textolite', component: TextoliteComponent},
                   // {path: 'Fluoroplastic', component: FluoroplasticComponent},
                   // {path: 'Techtron', component: TechtronComponent},
                   // {path: 'Vinyl', component: VinylComponent},
                   // {path: 'Mica', component: MicaComponent},
                    //{path: 'Polyacetal', component: PolyacetalComponent},
                    //{path: 'Polyamide', component: PolyamideComponent}
                ]},
           ],
        useAsDefault: true
    },
    { path: 'contacts',      component: ContactsComponent },
];


export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];

