import { Component, OnInit } from '@angular/core';
import { ProviderServiceService } from '@app/services/provider/provider-service.service';
import { AuthService } from '@modules/auth/services';

@Component({
  selector: 'sb-check-provider',
  templateUrl: './check-provider.component.html',
  styleUrls: ['./check-provider.component.scss']
})
export class CheckProviderComponent implements OnInit {

  selectedProvider: any[] = [];
  opcionSeleccionado: string;

  constructor(private _providerServiceService: ProviderServiceService,private _providerService: ProviderServiceService, public _serviceAuth:AuthService) { }

  ngOnInit(): void {
    this.getAllProvider();
  }


  getAllProvider(){
    this._providerService.postAllProvider().subscribe((respuesta: any) => {

      const companyUserIdLogin = this._serviceAuth.data_id;
      //  const companyUserIdLogin = "63629bcd1b26e4b02200e6d9"
        const Array = [];
        
 
          for( let i of respuesta.data) {
         
            if (i.companyUserId == companyUserIdLogin) {
              const actualizar = i;
              Array.push(actualizar);
            }
          } 
        this.selectedProvider = Array;
        console.log(respuesta)
       
    });
    



 }


}
