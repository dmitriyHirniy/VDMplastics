import { provideRouter, RouterConfig } from '@angular/router';
import {RootPageComponent} from "../rootComponents/mainPage.component";
import {ContactsComponent} from "../rootComponents/contacts.component";

export const routes: RouterConfig = [
    {
        path: '',
        children: [
            {path: '', component: RootPageComponent},
           ],
        useAsDefault: true
    },
    { path: 'contacts',      component: ContactsComponent },
];


export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];

