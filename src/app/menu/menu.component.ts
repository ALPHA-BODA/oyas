import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { GetApiService } from '../services/get-api.service';
import { GetDevicesService } from '../services/get-devices.service';
import { SensorData } from '../interfaces/sensor-data';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  sensorData: SensorData[] = [];
  title = 'frontend';
  constructor(
    private api: GetApiService,
    private ap: GetDevicesService,
    private loginService: LoginService
  ) {}
  ngOnInit() {
    //this.isAdmin = this.loginService.hasAuthority('admin');
    this.getData();
  }
  // retrieveData() {
  //   this.api.getSensorData().subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  getData(): void {
    this.api
      .getSensorData()
      .subscribe((sensorData) => (this.sensorData = sensorData));
  }
  isAdmin: boolean = false;
}
