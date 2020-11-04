import { Component, OnInit } from '@angular/core';
import {fromNovaPoshta, getAreas, getCites, getWarehouse} from './novaposhta.models';
import {NovaposhtaConfig} from './novaposhta.config';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './novaposhta.component.html',
  styleUrls: ['./novaposhta.component.css']
})

export class NovaposhtaComponent implements OnInit {
  getAreas: getAreas[];
  selectedArea: string;
  private getAreasDone = false;

  getCites: getCites[];
  getWarehouse: getWarehouse[];

  private getCitesDone = false;
  private getWarehouseDone = false;

  constructor(private http: HttpClient) { }

  // Обращение к серверу новой почты, получение списка регионов, и загрузка их в поле
  selectedCity: string;
  selectedWarehouse: string;
  apiGetAreas(): void {
    // console.log('Api get areas');
    // Составление тела запроса, на основе правил новой почты
    const body = {apiKey: NovaposhtaConfig.apiKey, modelName: 'Address', calledMethod: 'getAreas'};
    // Остылка запроса и подвзяка информации в поле
    this.http.post(NovaposhtaConfig.url, body).subscribe(
      (data: fromNovaPoshta) => {this.getAreas = data.data; this.getAreasDone = true; },
      error => console.log(error)
    );
  }

  ngOnInit(): void {
    this.apiGetAreas();
  }

  changeArea(selectedArea): void {
    this.selectedArea = selectedArea;
    console.log('Area: ' +  this.selectedArea);
    const body = {
      apiKey: NovaposhtaConfig.apiKey,
      modelName: 'Address',
      calledMethod: 'getCities',
      methodProperties: {
        AreaRef: this.selectedArea
      }
    };
    // Остылка запроса и подвзяка информации в поле
    this.http.post(NovaposhtaConfig.url, body).subscribe(
      (data: fromNovaPoshta) => {this.getCites = data.data; this.getCitesDone = true; },
      error => console.log(error)
    );
  }

  // changeCity(selectedCity): void {
  //   this.selectedCity = selectedCity;
  //   console.log('Selected City ' + this.selectedCity);
  // }
    changeCity(selectedCity): void {
    this.selectedCity = selectedCity;
    console.log('City: ' +  this.selectedCity);
    const body = {
      apiKey: NovaposhtaConfig.apiKey,
      modelName: 'AddressGeneral',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityRef: this.selectedCity
      }
    };
    this.http.post(NovaposhtaConfig.url, body).subscribe(
      (data: fromNovaPoshta) => {this.getWarehouse = data.data; this.getWarehouseDone = true; },
      error => console.log(error)
    );
  }
}
