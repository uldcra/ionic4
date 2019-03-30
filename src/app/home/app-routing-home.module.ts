import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService  } from 'src/app/services/authLogin.service';
import { ListPage } from './list/list.page';
import { HomePage } from './home.page';
import { ListadosPage } from './listados/listados.page';



const routes: Routes = [
 {
  path:'',
  component:HomePage,
  children:[
    { 
      path: 'list', 
      component:ListPage,
      canActivate:[AuthGuardService]
      }, 
      { 
        path: 'listados', 
        component:ListadosPage,
        canActivate:[AuthGuardService]
        },
        { path: '', redirectTo: 'list', pathMatch: 'full' },
  ]
 },
   

 
  

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingHomeModule { }
