import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesServiceService } from '@app/services/category/categories-service.service';
import { ProductsServiceService } from '@app/services/products/products-service.service';
import { ProviderServiceService } from '@app/services/provider/provider-service.service';
import { IProviderModel } from '@modules/create-provider/model/provider.model';
import { validate } from 'json-schema';
import Swal from 'sweetalert2';



@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss'],
})



export class CreateProductComponent implements OnInit {
    
    formModal:any;

    public submitted: boolean = false;

    selectedCategoryId: number;
    // @Input() name:string;
    selectedProducts: any[] = [];
    selectedProvider: any[] = [];
    dataCategoriesFather: any[] = [];
    dataCategories: any[] = [];
    arrayCategories: any[] = [];
    selectedImgCover: File;
    selectedPdfData: File; 
    selectedPdfSafe: File; 
    selectedImgArray: string [] = [];
    selectedFiles: FileList;
    previews: string[] = [];

    productForm: FormGroup;
    reviewProductForm: FormGroup;

    constructor(private _productsService: ProductsServiceService, private _categoriesService: CategoriesServiceService, private _providerService: ProviderServiceService) {}

    ngOnInit() {
        this.getProductsAll();
        this.getCategories();
        this.formProductNew();
        this.formProductReview();
        this.getAllProvider();
    }



formProductNew(){        
      this.productForm = new FormGroup({
  
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ]),
          longDescription: new FormControl('', [Validators.required, Validators.maxLength(100)]),
          brand: new FormControl('', [Validators.required, Validators.minLength(10)]),
          quantity: new FormControl('', [Validators.required, Validators.minLength(5)]),
          price: new FormControl('', [Validators.required, Validators.minLength(10)]),
          sku: new FormControl('', [Validators.required, Validators.minLength(10)]),
          idProvider: new FormControl('', [Validators.required]),
          category: new FormControl('', [Validators.required]),
          coverImage: new FormControl('', [Validators.required]),
          safetySheet: new FormControl('', [Validators.required]),
          dataSheet: new FormControl('', [Validators.required]),
          images: new FormControl('', [Validators.required]),




          // agregar review
  
          // nameProduct: new FormControl(''),
          // brand: new FormControl(''),
          // productDescription: new FormControl(''),
          // quantity: new FormControl(''),
          // price: new FormControl(''),
          // mainImage: new FormControl(''),
          // safetySheet: new FormControl(''),
          // supplierIdentification: new FormControl(''),
          // idSupplier: new FormControl(''),
          // dataSheet: new FormControl(''),
          // carouselImages: new FormControl(''),
      });
    }





    PdfSelectedData(event:any){
        this.selectedPdfData = event.target.files[0];
        
        /// se hace con un ng ig y ng.template
        // como el eejercicio de si es medellin del admin

      }
      PdfSelectedSafe(event:any){
        this.selectedPdfSafe = event.target.files[0];
      }


    onResetForm(){
      this.productForm.reset();
    }
    

    onProducts(){
        
      if(this.productForm.valid){
    
        const fd = new FormData();
    
        fd.append('name', this.productForm.get('name')?.value);
        fd.append('longDescription', this.productForm.get('longDescription')?.value);
        fd.append('brand', this.productForm.get('brand')?.value);
        fd.append('quantity', this.productForm.get('quantity')?.value);
        fd.append('price', this.productForm.get('price')?.value);
        fd.append('sku', this.productForm.get('sku')?.value);
    
        for (var i = 0; i < this.selectedImgArray.length; i++) { 
          fd.append("images[]", this.selectedImgArray[i]);
        }
     
        fd.append('dataSheet', this.selectedPdfData);
        fd.append('idProvider', this.productForm.get('idProvider')?.value);
        fd.append('safetySheet', this.selectedPdfSafe);
        fd.append('category', this.productForm.get('category')?.value);
        fd.append('coverImage', this.selectedImgCover);

            this._productsService.createNewProducts(fd).subscribe(res => {
              Swal.fire({
                icon: 'success',
                title: 'Exitoso...',
                text: 'Su producto ha sido guardado',
                
              })
            });
            
      }else{
        Object.values(this.productForm.controls).forEach(control=>{
          control.markAllAsTouched();
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Verifique que todos los campos tienen informacion!',
          
          })
        });
             
      }

      }

      public get f():any{
        return this.productForm.controls;
      }

      // get name() { return this.productForm.get('name');}

      formProductReview(){

        this.reviewProductForm = new FormGroup({
          id: new FormControl('', [Validators.required]),
          title: new FormControl('', [Validators.required]),
          detailReview: new FormControl('', [Validators.required]),
          emailOwner: new FormControl('', [Validators.required])
    
        });
      }

      registerReview(){

        let review = {
  
        id: this.reviewProductForm.value.id,
        title: this.reviewProductForm.value.title,
        detailReview: this.reviewProductForm.value.detailReview,
        emailOwner: "construclick@gmail.com",
        }
  
      console.log(review);
       this._productsService.addReviewProduct(review).subscribe(resp =>{
  
        console.log(resp);
  
      });  
    }


      onImgCover(event:any){
        this.selectedImgCover = event.target.files[0];
     
      }

      selectFilesGallery(event: any): void {

        for (let i = 0; i < event.target.files.length; i++) { 
          console.log(event.target.files[i]);
          this.selectedImgArray.push(event.target.files[i]);
        }

        this.selectedFiles = event.target.files;
        this.previews = [];
        if (this.selectedFiles && this.selectedFiles[0]) {
          const numberOfFiles = this.selectedFiles.length;
          for (let i = 0; i < numberOfFiles; i++) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              // console.log(e.target.result);
              this.previews.push(e.target.result);
            };
            reader.readAsDataURL(this.selectedFiles[i]);
          }
        }
      }


    getProductsAll(){

        this._productsService.getAllProducts().subscribe(resp => {
                console.log("Productos",resp.data);
            for(let i in resp.data) {
    
                this.selectedProducts.push(resp.data[i]);
            }
        });
    
      }

      getCategories(){
        this._categoriesService.getCategories().subscribe((respuesta:any)=>{
          this.dataCategoriesFather = respuesta.data;
    
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


         getAllProvider(){

            this._providerService.postAllProvider().subscribe(resp => {

                this.selectedProvider = resp.data;

                // console.log("proveedores", resp.data);
                
            });
         }




}
