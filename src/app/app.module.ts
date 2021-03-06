import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  
import { HttpClientModule } from "@angular/common/http";
import { ListarDirectorioService } from 'src/app/services/listar-directorio.service';
import { AuthGuardService } from './services/authLogin.service';
import { LoginService } from './services/login.service';
import { ListService } from './services/list-service';




@NgModule({
  declarations: [
    AppComponent,
   
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    ListarDirectorioService,
    AuthGuardService,
    LoginService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ListService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
