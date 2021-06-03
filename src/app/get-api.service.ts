import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient)
   { 

   }

   apiCall(){
     return this.http.get('https://sensorultra.data.thethingsnetwork.org/api/v2/devices?Authorization=key ttn-account-v2.g7M2c9s1lvj-ySg3cAc-CmAJw0thqRSFxrjFd3k7AVY');
   }

   apiCall2(){
    return this.http.get('https://sensorultra.data.thethingsnetwork.org/api/v2/query?Authorization=key ttn-account-v2.g7M2c9s1lvj-ySg3cAc-CmAJw0thqRSFxrjFd3k7AVY');

   }

   apiCall3(){
    return this.http.get('https://sensorultra.data.thethingsnetwork.org/api/v2/query/sensor1?Authorization=key ttn-account-v2.g7M2c9s1lvj-ySg3cAc-CmAJw0thqRSFxrjFd3k7AVY');

   }
}
