import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class EngineeringPlasticService {

    constructor(private http:Http) { }

    // Uses http.get() to load a single JSON file
    public getProducts() {
        return this.http.get('/app/data/products.json').map((res:Response) => res.json());
    }

}
