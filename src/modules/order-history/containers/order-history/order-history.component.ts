import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-order-history',
    templateUrl: './order-history.component.html',
    styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
    model!: NgbDateStruct;
    constructor() {}

    ngOnInit() {}
}
