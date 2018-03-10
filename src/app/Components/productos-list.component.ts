import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector : 'productos-list' ,
    templateUrl: '../views/productos-list.html'
})

export class ProductosListComponent {
public titulo: string;

constructor(private _route: ActivatedRoute,
            private_router: Router) {

    this.titulo = 'Lista de productos';
}
ngOnInit() {
console.log('Producto lista cargado');
}
}

