import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

	getWeather(city: string){
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+(city)+'&units=imperial&APPID=515f6b977eea9a92b7923c07cc13370b').map(data => data.json()).toPromise();
	}
}
