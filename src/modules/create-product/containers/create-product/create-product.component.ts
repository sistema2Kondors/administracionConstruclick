import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesServiceService } from '@app/services/category/categories-service.service';
import { ProductsServiceService } from '@app/services/products/products-service.service';
import { ProviderServiceService } from '@app/services/provider/provider-service.service';
import { IProviderModel } from '@modules/create-provider/model/provider.model';


@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss'],
})



export class CreateProductComponent implements OnInit {
    
    formModal:any;

    @Input() name:string;
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

        name: new FormControl('', [Validators.required]),
        longDescription: new FormControl('', [Validators.required]),
        brand: new FormControl('', [Validators.required]),
        quantity: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]),
        idProvider: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),

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
      }
      PdfSelectedSafe(event:any){
        this.selectedPdfSafe = event.target.files[0];
      }

    onProducts(){

        const fd = new FormData();
    
        fd.append('name', this.productForm.get('name')?.value);
        fd.append('longDescription', this.productForm.get('longDescription')?.value);
        fd.append('brand', this.productForm.get('brand')?.value);
        fd.append('quantity', this.productForm.get('quantity')?.value);
        fd.append('price', this.productForm.get('price')?.value);
    
        for (var i = 0; i < this.selectedImgArray.length; i++) { 
          fd.append("images[]", this.selectedImgArray[i]);
        }
     
        fd.append('dataSheet', this.selectedPdfData);
        fd.append('idProvider', this.productForm.get('idProvider')?.value);
        fd.append('safetySheet', this.selectedPdfSafe);
        fd.append('category', this.productForm.get('category')?.value);
        fd.append('coverImage', this.selectedImgCover);
        
            this._productsService.createNewProducts(fd).subscribe(res => {

                    console.log("Producto creado", res);
                    

            })

        // this.http
        //   .post(`${environment.DOMAIN_URL}/${ProductsServiceEntries.PRODUCTS_ENDPOINT}`, fd)
        //   .subscribe({
        //     next: (response) => {
        //       console.log(response);
        //     },
        //     error: (error) => {
        //       console.log(error);
        //     }
        //   });
      }


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
    
        // console.log("COver",this.selectedImgCover);
        
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
