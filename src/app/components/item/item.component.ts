import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

  producto: any = undefined;
  codigo: string = undefined;

  constructor(private route: ActivatedRoute,
              private _ps: ProductosService) {
    route.params.subscribe( parametros => {
        // console.log(parametros);
        // console.log(parametros['id']);

        _ps.cargar_producto(parametros['id'])
          .subscribe( res => {
            this.producto = res.json();
            this.codigo = parametros['id'];
              // console.log( this.producto);
          })
    })
  }

}
