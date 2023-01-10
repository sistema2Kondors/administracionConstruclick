import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderServiceService } from '@app/services/provider/provider-service.service';
import { AuthService } from '@modules/auth/services';
import Swal from 'sweetalert2';

@Component({
    selector: 'create-provider',
    templateUrl: './create-provider.component.html',
    styleUrls: ['./create-provider.component.scss'],
})
export class CreateProviderComponent implements OnInit {

    providerForm: FormGroup;
    submitted: boolean = false;

    constructor(private _providerService: ProviderServiceService, public _serviceAuth:AuthService) { }

    ngOnInit() {
        this.formProviderNew();
    }


    formProviderNew() {
        this.providerForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
            docNumber: new FormControl('', [Validators.required, Validators.maxLength(20)]),
            //docFile: new FormControl('', [Validators.required, Validators.minLength(10)]),
            docType: new FormControl('', [Validators.required]),
            address: new FormControl('', [Validators.required, Validators.minLength(10)]),
            contactNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
            companyUserId: new FormControl('', [Validators.required, Validators.minLength(10)]),
        });
    }



    onResetForm() {
        this.providerForm.reset();
    }

    onProvider() {
        if (this.providerForm.valid) {

            const fd = new FormData();

            fd.append('name', this.providerForm.get('name')?.value);
            fd.append('docNumber', this.providerForm.get('docNumber')?.value);
            //fd.append('docFile', this.providerForm.get('docFile')?.value);
            fd.append('docType', this.providerForm.get('docType')?.value);
            fd.append('address', this.providerForm.get('address')?.value);
            fd.append('contactNumber', this.providerForm.get('contactNumber')?.value);
            fd.append('companyUserId', this._serviceAuth.data_id);
            console.log(this.providerForm);

            this._providerService.postProvider(fd).subscribe(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Exitoso...',
                    text: 'Su producto ha sido guardado',

                })
            });

        } else {
            Object.values(this.providerForm.controls).forEach(control => {
                control.markAllAsTouched();
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Verifique que todos los campos tienen informacion!',

                })
            });

            this.submitted = true;

        }
    }


    public get f():any{
        return this.providerForm.controls;
    }









}