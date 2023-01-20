import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoProductos } from '../interfaces/porducto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos : any  = {};

  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }

  private cargarProductos (){
    this.http.get('https://angular-html-7094a-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (res: InfoProductos) => {

      console.log(res);
      this.productos = res;

      setTimeout(() =>{
        this.cargando = false;
      }, 1000);
    });
  }



}
