import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesServiceService } from '@app/services/category/categories-service.service';
import { ProductsServiceService } from '@app/services/products/products-service.service';
import { ProviderServiceService } from '@app/services/provider/provider-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'sb-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  public submitted: boolean = false;
  public submReview: boolean = false;
  public productsDetails: any[] = [];
  public arrayCategories: any[] = [];
  public selectedProvider: any[] = [];
  selectedProducts: any[] = [];

  productForm: FormGroup;
  reviewProductForm: FormGroup;

  constructor( private _productsService: ProductsServiceService,  private activatedRoute:ActivatedRoute, private _categoriesService: CategoriesServiceService, private _providerService: ProviderServiceService ) { }

  ngOnInit(): void {
    this.getOneProduct();
    this.formProductNew();
    this.getCategories();
    this.getAllProvider();
    this.formProductReview();
    this.getProductsAll();
  }

  // get name() {
  //   return this.productForm.get('name');
  // }

  public get f():any{
    return this.productForm.controls;
  }

  formProductNew(){        
    this.productForm = new FormGroup({

        name: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(60)]),
        brand: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(25)]),
        quantity: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(9)]),
        price: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
        sku: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(10)]),
        longDescription: new FormControl('', [Validators.required, Validators.minLength(20),Validators.maxLength(300)]),
        idProvider: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),

      });
    }

    formProductReview(){
      this.reviewProductForm = new FormGroup({
     
        title: new FormControl('', [Validators.required]),
        detailReview: new FormControl('', [Validators.required]),
       
  
      });
    }

      public get review():any{
          return this.reviewProductForm.controls;
        }

    registerReview(){
      if(this.reviewProductForm.valid){
        
          this.activatedRoute.params.subscribe(params => {
          let review = {
          id: params.id,
          title: this.reviewProductForm.value.title,
          detailReview: this.reviewProductForm.value.detailReview,
          emailOwner: "construclick@gmail.com",
          }
      
        this._productsService.addReviewProduct(review).subscribe(resp =>{

            this.alertSuccesReview();
            this.onResetFormReview();

        });  

  });
    } else{
      this.submReview = true;
    }


}


onResetFormReview(){
  this.reviewProductForm.reset();
}


  getOneProduct(){
    this.activatedRoute.params.subscribe(params => {
      this._productsService.getOneProducts(params.id).subscribe(resp => {
          this.productsDetails = resp.data;
            // console.log("Producto", resp.data);
            
      });
    });
  }


  updateProduct() {

    if(this.productForm.valid){
    this.activatedRoute.params.subscribe(params => {
    const fd = new FormData();

      fd.append('name', this.productForm.get('name')?.value);
      fd.append('brand', this.productForm.get('brand')?.value);
      fd.append('longDescription', this.productForm.get('longDescription')?.value);
      fd.append('price', this.productForm.get('price')?.value);
      fd.append('quantity', this.productForm.get('quantity')?.value);
      fd.append('category', this.productForm.get('category')?.value);
      fd.append('idProvider', this.productForm.get('idProvider')?.value);
      fd.append('sku', this.productForm.get('sku')?.value);
      // console.log("Update params",params.id);
      this._productsService.updateProducts(params.id, fd).subscribe(resp => {
             this.alertSuccesUpdate();
          // console.log("Actualizado", resp);
          
        });
      },(err) => {
        this.alertDanger();
    });    
    }else{
      this.submitted = true;
      this.alertDataUpdateAll();
      
    }
  }

  getCategories(){
    this._categoriesService.getCategories().subscribe((respuesta:any)=>{
    
            for(let i of respuesta.data) {
        
                    for(let j of i.children) {

                        for(let k of j.children) {

                            this.arrayCategories.push(k);

                    }
                }   
             }
            //  console.log("crear", this.arrayCategories);

          });
     
     }

     getProductsAll(){

      this._productsService.getAllProducts().subscribe(resp => {
              console.log("Productos",resp.data);
          for(let i in resp.data) {
  
              this.selectedProducts.push(resp.data[i]);
          }
      });
  
    }


     getAllProvider(){

        this._providerService.postAllProvider().subscribe(resp => {

            this.selectedProvider = resp.data;

            // console.log("proveedores", resp.data);
            
        });
     }


     alertSuccesUpdate(){
      Swal.fire({
        icon: 'success',
        title: 'Exitoso...',
        text: 'Su producto ha sido Actualizado',
      })
     }
     alertSuccesReview(){
      Swal.fire({
        icon: 'success',
        title: 'Exitoso...',
        text: 'Agregado correctamente',
      })
     }

     alertDataUpdateAll(){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Verifique que todos los campos tienen información!',
      
      })

     }

     alertDanger(){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal al actualizar el producto!',
      
      })
     }




}
