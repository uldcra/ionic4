import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { AuthGuardService } from '../services/authLogin.service';
import { LoginService } from '../services/login.service';
import { ListPage } from './list/list.page';
import { ListadosPage } from './listados/listados.page';
import { MenuComponent } from '../components/menu/menu.component';
import { AppRoutingHomeModule } from './app-routing-home.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppRoutingHomeModule
   /*  RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'list',
        component: ListPage,
      },
      {
        path: 'listados',
        component: ListadosPage,
      },
     
    ]) */
    
  ],
  declarations: [
    HomePage,
    MenuComponent,
    ListPage,
    ListadosPage
   
 
  ],
  providers:[
    AuthGuardService,
    LoginService,
  ],
  exports:[
    ListadosPage,
  ]
})
export class HomePageModule {}
