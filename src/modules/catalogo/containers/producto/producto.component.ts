import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

interface Payment {
    product: string;
    idPago: number;
    presentation: string;
    sku: string;
}

const PAYMENTS: Payment[] = [
    {
        product: 'tubo',
        idPago: 1222123,
        presentation: '1und',
        sku: 'delgado',
    },
    {
        product: 'tubo',
        idPago: 1222123,
        presentation: '1und',
        sku: 'delgado',
    },
    {
        product: 'tubo',
        idPago: 1222123,
        presentation: '1und',
        sku: 'delgado',
    },
    {
        product: 'tubo',
        idPago: 1222123,
        presentation: '1und',
        sku: 'delgado',
    },
    {
        product: 'tubo',
        idPago: 1222123,
        presentation: '1und',
        sku: 'delgado',
    },
    {
        product: 'tubo',
        idPago: 1222123,
        presentation: '1und',
        sku: 'delgado',
    },
    {
        product: 'tubo',
        idPago: 1222123,
        presentation: '1und',
        sku: 'delgado',
    },
    {
        product: 'tubo',
        idPago: 1222123,
        presentation: '1und',
        sku: 'delgado',
    },
    {
        product: 'tubo',
        idPago: 1222123,
        presentation: '1und',
        sku: 'delgado',
    },
    {
        product: 'tubo',
        idPago: 1222123,
        presentation: '1und',
        sku: 'delgado',
    },
    {
        product: 'tubo',
        idPago: 1222123,
        presentation: '1und',
        sku: 'delgado',
    },
];
@Component({
    selector: 'app-notificaciones',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
    model!: NgbDateStruct;
    page = 1;
    pageSize = 4;
    collectionSize = PAYMENTS.length;
    payments!: Payment[];

    constructor() {
        this.refreshCountries();
    }
    ngOnInit(): void {}

    refreshCountries() {
        this.payments = PAYMENTS.map((payment, i) => ({ id: i + 1, ...payment })).slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
        );
    }
}
