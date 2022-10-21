import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '@app/services/products/products-service.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-productos',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
    productos: any[] = [];

    constructor(private _productsServiceService: ProductsServiceService) {}
    ngOnInit(): void {
        this.getAllProducts();
    }

    getAllProducts() {
        this._productsServiceService.getAllProducts().subscribe((respuesta: any) => {
            this.productos = respuesta.data;
            console.log(respuesta);
        });
    }
}
