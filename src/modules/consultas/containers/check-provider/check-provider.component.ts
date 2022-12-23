import { Component, OnInit } from '@angular/core';
import { ProviderServiceService } from '@app/services/provider/provider-service.service';

@Component({
  selector: 'sb-check-provider',
  templateUrl: './check-provider.component.html',
  styleUrls: ['./check-provider.component.scss']
})
export class CheckProviderComponent implements OnInit {

  selectedProvider: any[] = [];
  opcionSeleccionado: string;

  constructor(private _providerServiceService: ProviderServiceService,private _providerService: ProviderServiceService) { }

  ngOnInit(): void {
    this.getAllProvider();
  }


  getAllProvider(){

    this._providerService.postAllProvider().subscribe(resp => {
        this.selectedProvider = resp.data;
    });
 }


}
