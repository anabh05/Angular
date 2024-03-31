import { Injectable, inject } from '@angular/core';
import { productos } from '../db/productos.db';
import { Producto } from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl = 'http://localhost:3000/Productos'
  private httpClient = inject(HttpClient)


  // constructor() { }

  create(nuevoProducto: Producto) {
    return firstValueFrom(
      this.httpClient.post<Producto>(this.baseUrl, nuevoProducto/**, this.createHeaders() */)
    )
  }


  getAll(): Producto[] {
  return productos;
    
  }


  
}
