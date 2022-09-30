import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

interface Payment {
    id?: number;
    description: string;
    paymentDate: number;
    state: string;
    amount: number;
}

const PAYMENTS: Payment[] = [
    {
        description: 'Russia',
        paymentDate: 228282,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
    {
        description: 'France',
        paymentDate: 640679,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
    {
        description: 'Germany',
        paymentDate: 357114,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
    {
        description: 'Portugal',
        paymentDate: 92090,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
    {
        description: 'Canada',
        paymentDate: 9976140,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
    {
        description: 'Vietnam',
        paymentDate: 331212,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
    {
        description: 'Brazil',
        paymentDate: 8515767,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
    {
        description: 'Mexico',
        paymentDate: 1964375,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
    {
        description: 'United States',
        paymentDate: 9629091,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
    {
        description: 'India',
        paymentDate: 3287263,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
    {
        description: 'Indonesia',
        paymentDate: 1910931,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
    {
        description: 'Tuvalu',
        paymentDate: 26,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
    {
        description: 'China',
        paymentDate: 9596960,
        state: '23-04-2022/28-06-2022',
        amount: 203333,
    },
];

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
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
