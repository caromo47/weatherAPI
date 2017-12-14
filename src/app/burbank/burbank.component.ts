import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
	weather;
	temp;
	maxTemp;
	minTemp;
	humidity;
	clouds;

  constructor(private _weatherService: ApiService) { }

  ngOnInit() {
		this.weather = this._weatherService.getWeather('burbank').then((weather)=>{
			console.log(weather)
			this.humidity = weather.main.humidity;
			this.temp = weather.main.temp;
			this.maxTemp = weather.main.temp_max;
			this.minTemp = weather.main.temp_min;
			this.clouds = weather.weather[0].description;

		});
  }

}
