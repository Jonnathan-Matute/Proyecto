import { Component, OnInit } from '@angular/core';

//importamos la clase del servicio
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
//error mensaje
import { AlertController } from '@ionic/angular';  

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //variables
  picture;
  name;
  email: string;
  password: string;

  //inyectamos y tenemos el acceso a todos los metodos
  constructor(private authService: AuthService, private AFauth: AngularFireAuth,
    public router: Router, 
    public alertCtrl: AlertController) { }


  ngOnInit() {
  }

  //metodo
  onSubmitLogin()
  {
    this.authService.login(this.email, this.password).then( 
      res =>{
        this.router.navigate(['/home']);
      },
      res =>{
        this.showAlert();
      })
  }
  

  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Warning !',  
      subHeader: 'Hubo un error!',  
      message: 'Verifique los datos',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }
  
  loginGoogle(){
    this.authService.loginWithGoogle().then(res => {
      this.router.navigate(['/home']);
    }).catch(err => {
      alert('Los datos son incorrectos o no existe el usuario');
    })
  }

  loginFacebook(){
     this.authService.loginWithFacebook().then(res => {
       this.router.navigate(['/home']);
     }).catch(err => {
       alert('Los datos son incorrectos o no existe el usuario');
     })
  }

  async logGoogle() {
    const res = await this.AFauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = res.user;
    console.log(user);
    this.picture = user.photoURL;
    this.name = user.displayName;
    this.email = user.email;
 }

  logFacebook() {
    console.log('Login con Facebook');
  }
}
