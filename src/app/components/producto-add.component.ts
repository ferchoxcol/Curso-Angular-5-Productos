import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component( {
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ ProductoService ]
})

export class ProductoAddComponent {
    public titulo: string;
    public producto: Producto;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titulo = 'Crear un nuevo producto';
        this.producto = new Producto(0, '', '', 0, '');
    }
    ngOnInit() {
        console.log('ProductoAddComponent cargado correctamente.');
    }
    onSubmit() {
        this._productoService.addProductos(this.producto).subscribe(
            response => {
                console.log('response aZAel' + response);
                if (response.code === 200) {
                    console.log('redirigiiendo.............................');
                    this._router.navigate(['/productos']);

                }else {
                    console.log(response);
                }
            },
            error => {
                console.log(<any> error);
            }
        );
    }
}
