import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';
import { NavigationService } from '@modules/navigation/services';

@Component({
    selector: 'sb-top-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav.component.html',
    styleUrls: ['top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
    constructor(private navigationService: NavigationService, public _serviceAuth:AuthService, private router: Router) {}
    ngOnInit() {}
    toggleSideNav() {
        this.navigationService.toggleSideNav();
    }


    logout() {
        this._serviceAuth.logout();
        // this.router.navigate(['/auth/login']);
        // window.location.reload();      
    }

    // menuToggle() {
    //     const toggleMenu = document.querySelector(".menuCerrar");
    //     toggleMenu.classList.toggle("active");
    // }

}
