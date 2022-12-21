import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesServiceService } from '@app/services/category/categories-service.service';
import { ProductsServiceService } from '@app/services/products/products-service.service';
import { ProviderServiceService } from '@app/services/provider/provider-service.service';
import { AuthService } from '@modules/auth/services';
import { IProviderModel } from '@modules/create-provider/model/provider.model';
import Swal from 'sweetalert2';



@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss'],
})

export class CreateProductComponent implements OnInit {
    
    formModal:any;

    submitted: boolean = false;
    selectedCategoryId: number;
    selectedProducts: any[] = [];
    selectedProvider: any[] = [];
    dataCategoriesFather: any[] = [];
    dataCategories: any[] = [];
    arrayCategories: any[] = [];
    reviews: any[] = [];
    selectedImgCover: File;
    selectedPdfData: File; 
    idsValue: File;
    idsValueSelectSafe: File;
    idsValueImageCover: File;
    idsValueImageCarousel: File;
    selectedPdfSafe: File; 
    selectedImgArray: string [] = [];
    selectedFiles: FileList;
    previews: string[] = [];

    productForm: FormGroup;
    reviewProductForm: FormGroup;

    constructor(private _productsService: ProductsServiceService, private _categoriesService: CategoriesServiceService, private _providerService: ProviderServiceService, public _serviceAuth:AuthService) {}

    ngOnInit() {
        this.getProductsAll();
        this.getCategories();
        this.formProductNew();
        this.formProductReview();
        this.getAllProvider();
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
          coverImage: new FormControl('', [Validators.required]),
          safetySheet: new FormControl('', [Validators.required]),
          dataSheet: new FormControl('', [Validators.required]),
          images: new FormControl('', [Validators.required]),

      });
    }

    PdfSelectedData(event:any){
      try {
        const pdfSize = event.target.files[0].size;
        if(pdfSize > 1048576){

          Swal.fire(
            'Oops...',
            'El archivo supera el tamaño máximo de 1MB.',
            'question'
          )
          this.idsValue = null;
         
        }else{
          this.selectedPdfData = event.target.files[0];
        }

        } catch (error) {
          console.log("no hay archivos seleccionados");      
        }
  }

      PdfSelectedSafe(event:any){
        try {
          const pdfSize = event.target.files[0].size;
          if(pdfSize > 1048576){
            Swal.fire(
              'Oops...',
              'El archivo supera el tamaño máximo de 1MB.',
              'question'
            )
            this.idsValueSelectSafe = null;
          }else{
            this.selectedPdfSafe = event.target.files[0];
          }
          
          } catch (error) {
            console.log("no hay archivos seleccionados");      
          }
    }

    
    onImgCover(event:any){

      try {
        const imgSize = event.target.files[0].size;
 
        if(imgSize > 307200){
      
          Swal.fire(
            'Oops...',
            'La imagen supera el tamaño máximo de 300 kB.',
            'question'
          )

          this.idsValueImageCover = null;
        }else{
          this.selectedImgCover = event.target.files[0];
        }

      } catch (error) {
        console.log("no hay archivos seleccionados"); 
      }   
    }

    selectFilesGallery(event: any): void {

      this.selectedFiles = event.target.files;
      this.previews = [];
      if (this.selectedFiles && this.selectedFiles[0]) {
        const numberOfFiles = this.selectedFiles.length;
        for (let i = 0; i < numberOfFiles; i++) {

          try {
            const imgSize = event.target.files[i].size;
            if(imgSize > 307200){

              Swal.fire(
                'Oops...',
                'Verifique el tamaño de cada imagen, máximo de 300 kB por imagen.',
                'question'
              )
    
              this.idsValueImageCarousel = null;
            }else{

              const reader = new FileReader();
              reader.onload = (e: any) => {
                // console.log(e.target.result);
                this.previews.push(e.target.result);
              };
              reader.readAsDataURL(this.selectedFiles[i]);
            
              this.selectedImgArray = event.target.files;
            }

          } catch (error) {
            console.log("no hay archivos seleccionados"); 
          }
       
        }
      }
    }

    onResetForm(){
      this.productForm.reset();
    }
    
    onProducts(){

          //   const images = [];
      //   for (var i = 0; i < this.selectedImgArray.length; i++) { 
         
      //      images.push(this.selectedImgArray[i]) ;
      //   }

      // const pruebas = {

      //   name: this.productForm.get('name')?.value,
      //   longDescription: this.productForm.get('longDescription')?.value,
      //   brand: this.productForm.get('brand')?.value,
      //   quantity: this.productForm.get('quantity')?.value,
      //   price: this.productForm.get('price')?.value,
      //   sku: this.productForm.get('sku')?.value,
      //   images: images,
      //   dataSheet: this.selectedPdfData,
      //   idProvider: this.productForm.get('idProvider')?.value,
      //   safetySheet: this.selectedPdfSafe,
      //   category: this.productForm.get('category')?.value,
      //   coverImage: this.selectedImgCover,
      //   companyUserId: this._serviceAuth.data_id,
      //   reviews:[
      //       {
      //         title:" Garantia",
      //         detailReview: "this.reviewProductForm.value.detailReview",
      //         emailOwner: "construclick@gmail.com",
      //     }
      //   ],
      //  }

      //  console.log("Pruebas", pruebas);
       
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
        fd.append('companyUserId', this._serviceAuth.data_id);
       
            this._productsService.createNewProducts(fd).subscribe(res => {
              this.alertSuccesSave();
              this.onResetForm();

            }, (err) => {
                this.alertSku();
            });
            
      }else{
        this.submitted = true;
    
        this.alertDataUpdateAll();
            
      }

      }

      public get f():any{
        return this.productForm.controls;
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

    getProductsAll(){

        this._productsService.getAllProducts().subscribe(resp => {
                // console.log("Productos",resp.data);
            for(let i in resp.data) {
    
                this.selectedProducts.push(resp.data[i]);
            }
        });
    
      }

      getCategories(){
        this._categoriesService.getCategories().subscribe((respuesta:any)=>{
          // this.dataCategoriesFather = respuesta.data;
    
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


         alertSuccesSave(){
          Swal.fire({
            icon: 'success',
            title: 'Exitoso...',
            text: 'Su producto ha sido guardado',
          })

         }

         alertSku(){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El Sku de producto ya exite!',
          
          })
         }
         alertDataUpdateAll(){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Verifique que todos los campos tienen información!',
          
          })   
         }

 
}
