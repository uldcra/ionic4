import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user:string="";
  public passw:string="";

  // Usamos el decorador Output
  @Output() PasameLogin = new EventEmitter();


  constructor(private router:Router,public toastController: ToastController,private loginService:LoginService) {
       if(localStorage.getItem('sesion')!=null){
       this.router.navigate(['dashboard']);
         
         
         //window.location.href="/dashboard/"; 
      } 

  }

  ngOnInit() {
  }

login(){
  console.log(this.user,this.passw)
  if(this.user=="admin" && this.passw=="admin"){
    localStorage.setItem("sesion",this.user);
    this.presentToast();
    setTimeout(()=>{
      //window.location.reload();
      window.location.href="/dashboard/";
      //this.router.navigate(['dashboard']);
    },2000) 
   
  }else{
    this.failLoginWithOptions();
  }
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Te has logueado con éxito',
    duration: 1000
  });
  toast.present();
}

async presentToastWithOptions() {
  const toast = await this.toastController.create({
    message: 'Te has logueado con éxito',
    showCloseButton: true,
    position: 'top',
    closeButtonText: 'X',
    color:'primary'
  });
  toast.present();
}
async failLoginWithOptions() {
  const toast = await this.toastController.create({
    message: 'Usuario o password incorrectos',
    showCloseButton: true,
    position: 'top',
    closeButtonText: 'X',
    color:'danger'
  });
  toast.present();
}

enviarLogin(){
  this.PasameLogin.emit({"login":localStorage.getItem('sesion')});
}

}
