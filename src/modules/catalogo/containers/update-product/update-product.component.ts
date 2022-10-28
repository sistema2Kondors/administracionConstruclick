import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '@app/services/products/products-service.service';

@Component({
  selector: 'sb-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  public productsDetails: any[] = [];
  productForm: FormGroup;

  constructor( private _productsService: ProductsServiceService,  private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.getOneProduct();
    this.formProductNew();
  }

  formProductNew(){        
    this.productForm = new FormGroup({

        name: new FormControl('', [Validators.required]),
        longDescription: new FormControl('', [Validators.required]),
        brand: new FormControl('', [Validators.required]),
        quantity: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]),
        idProvider: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),

      });
    }



  getOneProduct(){

    this.activatedRoute.params.subscribe(params => {
      this._productsService.getOneProducts(params.id).subscribe(resp => {

          this.productsDetails = resp.data;
  
            console.log("Producto", resp.data);
            
      });
    });
  }


  updateProduct() {
    this.activatedRoute.params.subscribe(params => {
    const fd = new FormData();

      fd.append('name', this.productForm.get('name')?.value);
      fd.append('brand', this.productForm.get('brand')?.value);
      fd.append('longDescription', this.productForm.get('longDescription')?.value);
      fd.append('price', this.productForm.get('price')?.value);
      fd.append('quantity', this.productForm.get('quantity')?.value);

      console.log("Update params",params.id);
   
      this._productsService.updateProducts(params.id, fd).subscribe(resp => {
        
          console.log("Actualizado", resp);
          

      });
    });    
  }



}
