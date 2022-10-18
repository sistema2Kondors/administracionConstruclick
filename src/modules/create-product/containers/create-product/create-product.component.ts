import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
    productForm = new FormGroup({
        nameProduct: new FormControl(''),
        brand: new FormControl(''),
        productDescription: new FormControl(''),
        quantity: new FormControl(''),
        price: new FormControl(''),
        mainImage: new FormControl(''),
        safetySheet: new FormControl(''),
        supplierIdentification: new FormControl(''),
        idSupplier: new FormControl(''),
        dataSheet: new FormControl(''),
        carouselImages: new FormControl(''),
    });
    onSubmit() {
        console.log(this.productForm.value);
    }
    constructor() {}

    ngOnInit() {}
}
