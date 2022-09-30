import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notificaciones',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
    operations = 0;
    releases = 1;
    catalogue = 0;
    marketing = 1;
    payments = 0;
    profile = 1;
    constructor() {}

    ngOnInit() {}
}
