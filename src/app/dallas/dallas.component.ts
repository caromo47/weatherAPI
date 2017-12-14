import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
	weather;
	temp;
	maxTemp;
	minTemp;
	humidity;
	clouds;

  constructor(private _weatherService: ApiService) { }

  ngOnInit() {
		this.weather = this._weatherService.getWeather('dallas').then((weather)=>{
			console.log(weather)
			this.humidity = weather.main.humidity;
			this.temp = weather.main.temp;
			this.maxTemp = weather.main.temp_max;
			this.minTemp = weather.main.temp_min;
			this.clouds = weather.weather[0].description;

		});
  }

}
