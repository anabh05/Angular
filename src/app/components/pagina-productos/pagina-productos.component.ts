import { Component, inject } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-pagina-productos',
  templateUrl: './pagina-productos.component.html',
  styleUrls: ['./pagina-productos.component.css']
})
export class PaginaProductosComponent {

  urlBase = 'http://localhost:3000/Productos'
  arrProductos: Producto[] = [];

  productoService = inject(ProductoService) // inyectar el servicios

   // cuando arranca el componente quiero recuperar todos los productos
async ngOnInit() {
    const response = await this.productoService.getAll();
    this.arrProductos = response;
  }

}
