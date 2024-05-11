import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; // Importez l'environnement par défaut



@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  API_URL: string

  constructor() {
    const vmIP = environment.apiUrl;

    console.log("ici c est paris voila sa");
    console.log(vmIP);

    this.API_URL='http://192.168.56.14:8080/api';  

    //this.API_URL='https://cors-anywhere.herokuapp.com/http://api.contratti.immobiliz.com/api'; //http://127.0.0.1:8000
  }

}
