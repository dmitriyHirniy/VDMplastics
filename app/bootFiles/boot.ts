import { bootstrap }            from '@angular/platform-browser-dynamic';

import {AppComponent} from "../app.component";
import {APP_ROUTER_PROVIDERS} from "../routes/app.routes";
import {HTTP_PROVIDERS} from "@angular/http";
import {EngineeringPlasticService} from "../services/engineering-plastic.service";

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    EngineeringPlasticService
])
    .catch(err => console.error(err));