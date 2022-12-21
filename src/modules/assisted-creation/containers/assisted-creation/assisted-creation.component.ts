import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsServiceService } from '@app/services/products/products-service.service';
import { AuthService } from '@modules/auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-assisted-creation',
    templateUrl: './assisted-creation.component.html',
    styleUrls: ['./assisted-creation.component.scss'],
})
export class AssistedCreationComponent implements OnInit {

    selectedExcel: File;
    // submitted: boolean = false;
    formLoading: FormGroup;

    constructor(private _productsService: ProductsServiceService, public _serviceAuth: AuthService) {}

    ngOnInit() {
        this.formProductNew();
    }


    
formProductNew(){        
    this.formLoading = new FormGroup({

        loadigExcel: new FormControl('', [Validators.required]),

    });
  }

  public get f():any{
    return this.formLoading.controls;
  }


    excelSelectedData(event:any){
        try {

            this.selectedExcel = event.target.files[0];

  
          } catch (error) {
            console.log("no hay archivos seleccionados");      
          }
    }


    bulkLoad(){

        if(this.formLoading.valid){

        const fd = new FormData();

        fd.append('file', this.selectedExcel);
        fd.append('idCompany', this._serviceAuth.data_id);

        this._productsService.SaveBulkProducts(fd).subscribe(res => {
                console.log("Creado", res);
                this.alertSuccesSave();
            
        }, (err) => {
            this.alertSku();
        });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No hay archivo seleccionado!',
              })
        
        }

    }

    alertSuccesSave(){
        Swal.fire({
          icon: 'success',
          title: 'Exitoso...',
          text: 'Sus productos han sido guardados',
        })

       }

    
    alertSku(){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Verifique que su archivo sea el correcto ó su SKU ya exite!',
        
        })
       }


}
