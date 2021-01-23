import { Component } from '@angular/core';
//autenticacion para logout
import { AuthService } from "../servicios/auth.service";

import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public authservice: AuthService,) { }

  Onlogout() {
    this.authservice.logout();
  }
}
