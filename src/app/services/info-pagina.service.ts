import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargar = false;

  constructor( private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
   }


  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

       this.cargar = true;
       this.info = resp;
     });
  }


  equipo: any = {};


  private cargarEquipo(){
    this.http.get('https://angular-html-7094a-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( respuesta => {

      this.equipo = respuesta;

      console.log(respuesta);
    })
  }
}
