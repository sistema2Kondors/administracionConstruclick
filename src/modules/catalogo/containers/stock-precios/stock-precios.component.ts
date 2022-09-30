import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
interface Product {
    product: string;
    idProduct: number;
    unit: string;
    sku: string;
    price: number;
    stock: number;
    discounts: string;
}

const PRODUCT: Product[] = [
    {
        product: 'tubo',
        idProduct: 1222123,
        unit: '1und',
        sku: 'delgado',
        price: 20000,
        stock: 0,
        discounts: '0000%',
    },
    {
        product: 'tubo',
        idProduct: 1222123,
        unit: '1und',
        sku: 'delgado',
        price: 20000,
        stock: 0,
        discounts: '0000%',
    },
    {
        product: 'tubo',
        idProduct: 1222123,
        unit: '1und',
        sku: 'delgado',
        price: 20000,
        stock: 0,
        discounts: '0000%',
    },
    {
        product: 'tubo',
        idProduct: 1222123,
        unit: '1und',
        sku: 'delgado',
        price: 20000,
        stock: 0,
        discounts: '0000%',
    },
    {
        product: 'tubo',
        idProduct: 1222123,
        unit: '1und',
        sku: 'delgado',
        price: 20000,
        stock: 0,
        discounts: '0000%',
    },
    {
        product: 'tubo',
        idProduct: 1222123,
        unit: '1und',
        sku: 'delgado',
        price: 20000,
        stock: 0,
        discounts: '0000%',
    },
    {
        product: 'tubo',
        idProduct: 1222123,
        unit: '1und',
        sku: 'delgado',
        price: 20000,
        stock: 0,
        discounts: '0000%',
    },
];
@Component({
    selector: 'app-notificaciones',
    templateUrl: './stock-precios.component.html',
    styleUrls: ['./stock-precios.component.scss'],
})
export class StockPreciosComponent implements OnInit {
    model!: NgbDateStruct;
    page = 1;
    pageSize = 4;
    collectionSize = PRODUCT.length;
    products!: Product[];

    constructor() {
        this.refreshCountries();
    }
    ngOnInit(): void {}

    refreshCountries() {
        this.products = PRODUCT.map((product, i) => ({ id: i + 1, ...product })).slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
        );
    }
}
