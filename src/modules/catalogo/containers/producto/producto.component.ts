import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '@app/services/products/products-service.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-productos',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
    productos: any[] = [];
    

    constructor(private _productsServiceService: ProductsServiceService) {}
    ngOnInit(): void {
        this.getAllProducts();
    }

    getAllProducts() {
        this._productsServiceService.getAllProducts().subscribe((respuesta: any) => {

           const companyUserIdLogin = "63629c3e1b26e4b02200e6e3"
          //  const companyUserIdLogin = "63629bcd1b26e4b02200e6d9"
            const Array = [];
            const actualizar = respuesta.data;
            Array.push(actualizar);

              // for( let i of respuesta.data) {
             
              //   if (i.companyUserId == companyUserIdLogin) {
              //     const actualizar = i;
              //     Array.push(actualizar);
              //   }
              // }

            this.productos = Array[0];
            // this.productos = Array;

        });
    }

    deleteProduct(id:string){

        Swal.fire({
            title: '¿Está seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, bórralo!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                this._productsServiceService.deleteProduct(id).subscribe(resp => {
              
                    this.getAllProducts();
            });
              Swal.fire(
                '¡Eliminado!',
                'Su archivo ha sido eliminado.',
                'success'
              )
            }
          })

    }



}
