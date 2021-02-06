import { Component } from '@angular/core';
//autenticacion para logout
import { AuthService } from "../servicios/auth.service";

import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {

  constructor(public authservice: AuthService,private menu: MenuController,) { }

  Onlogout() {
    this.authservice.logout();
  }

  
}
