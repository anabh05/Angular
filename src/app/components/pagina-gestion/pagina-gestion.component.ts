import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-pagina-gestion',
  templateUrl: './pagina-gestion.component.html',
  styleUrls: ['./pagina-gestion.component.css']
})
export class PaginaGestionComponent {

  // arrProductos: Producto[] = [];
  // productoService: ProductoService;
  // unProducto: Producto[] = [];
  formData: any = {}; // Definir formData como un objeto vacío

  // constructor(productoService: ProductoService) {
  //   this.productoService = productoService; // Inyectamos el servicio en el constructor
  // }

  // ngOnInit(): void {
  //   this.arrProductos = this.productoService.getAll();
  // }

   formulario: FormGroup;

  formBuilder = inject(FormBuilder);
  prductosService = inject(ProductoService);
  router = inject(Router);

  constructor() {
    this.formulario = this.formBuilder.group({
      name: [],
      price: [],
      description: [],
      image: [],
    });
  }

  async onSubmit() {
    const response = await this.prductosService.create(this.formulario.value);
    if (response) {
      alert('Producto registrado');
      this.router.navigateByUrl('gestion');
    } else {
      alert('Revisa el formulario')
    }
  }

}

  

  

}
