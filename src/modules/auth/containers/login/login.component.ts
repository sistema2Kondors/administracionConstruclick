import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUser } from '@modules/auth/models/auth.model';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import Swal from 'sweetalert2';


@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {

    loginUserCompany: FormGroup;
    idsValue: string;
    public submitted: boolean = false;
    private emailPattern: any =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


      
    constructor(private router: Router, private _serviceLogin: AuthService) {}

    ngOnInit() {

      this.formLogin();
    

    }

    get password() {
        return this.loginUserCompany.get('password');
      }
      get email() {
        return this.loginUserCompany.get('email');
      }


      formLogin(){        
        this.loginUserCompany = new FormGroup({
    
            email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
            password: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(15)]),
         
  
        });
      }

      login() {
     
        if (this.loginUserCompany.valid) {

          let userCompanyLogin = {
            email: this.loginUserCompany.value.email,
            password: (this.loginUserCompany.value.password = sha256(
              this.loginUserCompany.value.password
            )),
          };

          this._serviceLogin.postLoginUser(userCompanyLogin).subscribe(
            (login: any) => {


              console.log("lOGIN",login);
              // console.log("typeUser",login.data.user.typeUser);
              // console.log("User",login.data.user);

              if (login.data.user.typeUser === "1") {
                if (login.code.code === 200) {
                  this.router.navigate(['/dashboard']);
                  this.onResetForm();
                }
              }else{
                this.idsValue = '';
                this.notAdministratorPermissions();
                this._serviceLogin.logout();
                
              }
            },
            async (err) => {
              // console.log(err);
              this.emailPasswordIncorrect();
            }
          );
          // console.log("valido");
        } else {
          this.submitted = true;
          // console.log("no valido");
        }
      }
      
  onResetForm(): void {
    this.loginUserCompany.reset();
  }


  notAdministratorPermissions(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Este usuario no tiene permisos para acceder como administrador!',
    
    })
   }


   emailPasswordIncorrect(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo o contraseña incorrectos!',
    
    })
   }



}
